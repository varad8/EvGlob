import { Injectable } from '@angular/core';
import { EvAdminProfile } from '../model/ev-admin-profile';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  CollectionReference,
  DocumentData,
  DocumentReference,
  Query,
  QueryFn,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Bookingmodel } from '../model/bookingmodel';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UserProfile } from '../model/user-profile';
import { Ratingmodel } from '../model/ratingmodel';

@Injectable({
  providedIn: 'root',
})
export class UserservicesService {
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}
  // Get the EV admin profiles from Firestore
  getEvAdminProfiles(): Observable<EvAdminProfile[]> {
    return this.firestore
      .collection<EvAdminProfile>('Evstation')
      .valueChanges();
  }

  // Get the EV admin data using userid
  getEvAdminDataByUserId(userid: string): Observable<EvAdminProfile[]> {
    return this.firestore
      .collection<EvAdminProfile>('Evstation', (ref) =>
        ref.where('userid', '==', userid)
      )
      .valueChanges();
  }

  // Save booking data to Firestore
  async saveBookingData(bookingData: Bookingmodel): Promise<string> {
    const bookingCollection =
      this.firestore.collection<Bookingmodel>('EvBookingData');
    // Generate current timestamp
    const currentTimestamp = Date.now();
    // Assign the current timestamp to the booking data
    bookingData.currentTimestamp = currentTimestamp;
    // Generate a new document reference
    const newBookingRef: AngularFirestoreDocument<Bookingmodel> =
      bookingCollection.doc();
    // Assign the generated document ID to bookingData.bookingRefId
    bookingData.bookingRefId = newBookingRef.ref.id;
    // Save booking data to Firestore with the generated document reference
    await newBookingRef.set(bookingData);
    // Return the generated document ID
    return newBookingRef.ref.id;
  }

  //checking slot availability for that date
  // Get booking data by stationId and date
  getBookingDataByStationIdAndDate(
    stationId: string,
    date: string,
    bookingSlot: string
  ): Observable<Bookingmodel[]> {
    return this.firestore
      .collection<Bookingmodel>('EvBookingData', (ref) =>
        ref
          .where('stationId', '==', stationId)
          .where('bookedForDate', '==', date)
          .where('bookingSlot', '==', bookingSlot)
          .where('visitingStatus', '==', 'not visited')
      )
      .valueChanges();
  }

  //Get Booking data by userid
  getBookingDataByUserId(userid: string): Observable<Bookingmodel[]> {
    return this.firestore
      .collection<Bookingmodel>('EvBookingData', (ref) =>
        ref.where('userId', '==', userid)
      )
      .valueChanges();
  }

  //update details firstname,lastname,dob,mobile,address
  async updateUserDetails(
    userid: string,
    lastname: string,
    firstname: string,
    dob: string,
    mobile: string,
    address: string,
    location: {
      city: string;
      state: string;
    }
  ): Promise<void> {
    try {
      const profileRef = this.firestore.collection('/UserProfile', (ref) =>
        ref.where('userid', '==', userid)
      );
      const querySnapshot = await profileRef.get().toPromise();

      if (querySnapshot !== undefined && !querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const docData = doc.data() as UserProfile;

          const updatedProfile: Partial<UserProfile> = {
            firstname: firstname,
            lastname: lastname,
            dob: dob,
            mobile: mobile,
            address: address,
            location: location,
          };

          doc.ref.update(updatedProfile);
        });
      } else {
        console.log('No documents found for the specified user ID.');
      }
    } catch (error) {
      console.error('Error updating profile fields:', error);
    }
  }

  //upload profile admin Image
  async uploadProfileImage(userid: string, file: File): Promise<string | null> {
    try {
      const filePath = `profile_images/${userid}_${new Date().getTime()}_${
        file.name
      }`;
      const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);

      // Track upload progress if needed
      uploadTask
        .percentageChanges()
        .subscribe((progress) => console.log(`Upload Progress: ${progress}%`));

      const snapshot = await uploadTask;

      // Get download URL
      const downloadURL = await storageRef.getDownloadURL().toPromise();
      return downloadURL;
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      return null;
    }
  }

  // Delete profile picture
  async deleteProfilePic(picURL: string): Promise<void> {
    try {
      // Create a reference to the file using the URL
      this.storage.ref('/' + picURL).delete();
      console.log('Profile picture deleted successfully.');
    } catch (error) {
      console.error('Error deleting profile picture:', error);
    }
  }

  // update profile image on firestore
  async updateProfileImage(userid: string, profilepic: string): Promise<void> {
    try {
      const profileRef = this.firestore.collection('/UserProfile', (ref) =>
        ref.where('userid', '==', userid)
      );
      const querySnapshot = await profileRef.get().toPromise();

      if (querySnapshot !== undefined && !querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          doc.ref.update({ profilepic: profilepic });
        });
      } else {
        console.log('No documents found for the specified user ID.');
      }
    } catch (error) {
      console.error('Error updating profile image:', error);
    }
  }

  getFilenameFromLink(link: string): string {
    // Split the link by '/' to get the last part
    const parts = link.split('/');

    // Get the last part of the link
    const lastPart = parts[parts.length - 1];

    // Decode the URL to handle any special characters
    const decodedLastPart = decodeURIComponent(lastPart);

    // Extract the filename by removing query parameters
    const filename = decodedLastPart.split('?')[0];

    return filename;
  }

  //get user bookings by userId
  getBookingsByUserId(userid: string): Observable<Bookingmodel[]> {
    return this.firestore
      .collection<Bookingmodel>('EvBookingData', (ref) =>
        ref.where('userId', '==', userid)
      )
      .valueChanges();
  }

  // Save or update a rating to Firestore based on stationId and userId
  async saveOrUpdateRating(ratingData: Ratingmodel): Promise<void> {
    try {
      // Check if a rating document already exists for the given stationId and userId
      const querySnapshot = await this.firestore
        .collection('ratings', (ref) =>
          ref
            .where('stationId', '==', ratingData.stationId)
            .where('userId', '==', ratingData.userId)
            .limit(1)
        )
        .get()
        .toPromise();

      if (!querySnapshot.empty) {
        // Update the existing rating document
        const docId = querySnapshot.docs[0].id;
        await this.firestore.collection('ratings').doc(docId).update({
          rating: ratingData.rating,
          feedbackMsg: ratingData.feedbackMsg,
        });
      } else {
        // Create a new rating document
        const docRef = await this.firestore
          .collection('ratings')
          .add(ratingData);
        const newDocId = docRef.id;

        // Update the newly created document with its own ID
        await this.firestore
          .collection('ratings')
          .doc(newDocId)
          .update({ docid: newDocId });

        console.log('Rating saved successfully.' + newDocId);
      }

      console.log('Rating saved/updated successfully.');
    } catch (error) {
      console.error('Error saving/updating rating:', error);
      throw error;
    }
  }

  //getrating data by stationid and userid
  getRatingByUserIdAndStationId(
    userid: string,
    stationid: string
  ): Observable<Ratingmodel[]> {
    return this.firestore
      .collection<Ratingmodel>('ratings', (ref) =>
        ref.where('userId', '==', userid).where('stationId', '==', stationid)
      )
      .valueChanges();
  }

  //rating by userid
  getRatingsByUserId(userId: string): Observable<Ratingmodel[]> {
    return this.firestore
      .collection<Ratingmodel>('ratings', (ref) =>
        ref.where('userId', '==', userId)
      )
      .valueChanges();
  }

  getEvAdminProfileByLocation(
    city: string,
    state: string
  ): Observable<EvAdminProfile[]> {
    let query: QueryFn<DocumentData> | undefined = undefined;

    if (city && state) {
      query = (ref) =>
        ref
          .where('location.city', '==', city)
          .where('location.state', '==', state);
    } else if (city) {
      query = (ref) => ref.where('location.city', '==', city);
    } else if (state) {
      query = (ref) => ref.where('location.state', '==', state);
    }

    return this.firestore
      .collection<EvAdminProfile>('Evstation', query)
      .valueChanges();
  }

  //get all booking data status is not visited
  getAllBookingData(): Observable<Bookingmodel[]> {
    return this.firestore
      .collection<Bookingmodel>('EvBookingData', (ref) =>
        ref.where('visitingStatus', '==', 'not visited')
      )
      .valueChanges();
  }
}

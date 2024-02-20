import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { EvAdminProfile } from '../model/ev-admin-profile';
import { UserProfile } from '../model/user-profile';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Bookingmodel } from '../model/bookingmodel';
import { Ratingmodel } from '../model/ratingmodel';

@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  // Method to get EvAdminProfile data by userid
  getEvAdminProfileByUserId(
    userid: string
  ): Observable<EvAdminProfile | undefined> {
    return this.afs
      .collection('/Evstation', (ref) => ref.where('userid', '==', userid))
      .valueChanges({ idField: 'id' })
      .pipe(
        map((profiles: any[]) => {
          if (profiles.length > 0) {
            const profileData = profiles[0] as EvAdminProfile; // Cast to EvAdminProfile
            return { ...profileData, id: profileData.id }; // Include 'id' in the result
          } else {
            return undefined;
          }
        })
      );
  }

  // Method to check if a user with a specific userid exists
  doesUserExist(userid: string): Observable<boolean> {
    return this.afs
      .collection('/Evstation', (ref) => ref.where('userid', '==', userid))
      .valueChanges()
      .pipe(
        map((profiles: any[]) => {
          return profiles.length > 0;
        })
      );
  }

  //update evadmin basic details 1
  async updateEvAdminProfileFields(
    userId: string,
    fieldsToUpdate: Partial<EvAdminProfile['profile']>
  ) {
    try {
      const profileRef = this.afs.collection('/Evstation', (ref) =>
        ref.where('userid', '==', userId)
      );
      const querySnapshot = await profileRef.get().toPromise();

      if (querySnapshot !== undefined && !querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const docData = doc.data() as EvAdminProfile; // Type assertion to EvAdminProfile
          const profileToUpdate = docData.profile;

          const updatedProfile = {
            ...profileToUpdate,
            ...fieldsToUpdate,
          };

          const dataToUpdate: Partial<EvAdminProfile> = {
            profile: updatedProfile,
            updatedAt: new Date().toISOString(),
          };

          doc.ref.update(dataToUpdate);
        });
      } else {
        console.log('No documents found for the specified user ID.');
      }
    } catch (error) {
      console.error('Error updating profile fields:', error);
    }
  }

  // only update profile.profilepic using userid

  // Upload profile picture
  async uploadProfilePic(userId: string, file: File): Promise<string | null> {
    try {
      const filePath = `profile_pictures/${userId}_${new Date().getTime()}_${
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

  //uploadEv Image
  async uploadEvImage(userId: string, file: File): Promise<string | null> {
    try {
      const filePath = `ev_images_pictures/${userId}_${new Date().getTime()}_${
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

  //Delete Ev Image
  async deleteEvImage(picURL: string): Promise<void> {
    try {
      // Create a reference to the file using the URL
      this.storage.ref('/' + picURL).delete();
      console.log('Profile picture deleted successfully.');
    } catch (error) {
      console.error('Error deleting profile picture:', error);
    }
  }

  //update evTimings /rate /title/description/location/coordinates
  async updateEVAdminDetails(
    userId: string,
    evTimings: Partial<EvAdminProfile['evTimings']>,
    rate: number,
    title: string,
    description: string,
    location: any,
    coordinates: any
  ): Promise<void> {
    try {
      const profileRef = this.afs.collection('/Evstation', (ref) =>
        ref.where('userid', '==', userId)
      );
      const querySnapshot = await profileRef.get().toPromise();

      if (querySnapshot !== undefined && !querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const docData = doc.data() as EvAdminProfile; // Type assertion to EvAdminProfile

          const updatedProfile: Partial<EvAdminProfile> = {
            evTimings: {
              ...docData.evTimings,
              ...evTimings,
            },
            rate: rate,
            title: title,
            description: description,
            location: location,
            coordinates: coordinates,
            updatedAt: new Date().toISOString(), // Add current timestamp
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

  //update imageUrl
  // Update imageUrl in EvAdminProfile
  async updateEvImage(userId: string, imageUrl: string): Promise<void> {
    try {
      const profileRef = this.afs.collection('/Evstation', (ref) =>
        ref.where('userid', '==', userId)
      );
      const querySnapshot = await profileRef.get().toPromise();

      if (querySnapshot !== undefined && !querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          doc.ref.update({ imageUrl: imageUrl });
        });
      } else {
        console.log('No documents found for the specified user ID.');
      }
    } catch (error) {
      console.error('Error updating profile image:', error);
    }
  }

  // Method to get count of documents with accountStatus status as "INACTIVE"
  getCountOfInactiveAccounts(): Observable<number> {
    return this.afs
      .collection('/Evstation', (ref) =>
        ref.where('accountStatus.status', '==', 'INACTIVE')
      )
      .valueChanges()
      .pipe(
        map((profiles: EvAdminProfile[]) => {
          return profiles.length;
        })
      );
  }

  // Method to get count of documents with accountStatus status as "ACTIVE"
  getCountOfActiveAccounts(): Observable<number> {
    return this.afs
      .collection('/Evstation', (ref) =>
        ref.where('accountStatus.status', '==', 'ACTIVE')
      )
      .valueChanges()
      .pipe(
        map((profiles: EvAdminProfile[]) => {
          return profiles.length;
        })
      );
  }

  // Method to get count of user profiles
  getCountOfUserProfiles(): Observable<number> {
    return this.afs
      .collection('/UserProfile')
      .valueChanges()
      .pipe(
        map((profiles: UserProfile[]) => {
          return profiles.length;
        })
      );
  }

  // Method to get all profiles with accountStatus "INACTIVE"
  getAllInactiveProfiles(): Observable<EvAdminProfile[]> {
    return this.afs
      .collection('/Evstation', (ref) =>
        ref.where('accountStatus.status', '==', 'INACTIVE')
      )
      .valueChanges({ idField: 'id' }) as Observable<EvAdminProfile[]>;
  }

  // Method to get all profiles with accountStatus "ACTIVE"
  getAllactiveProfiles(): Observable<EvAdminProfile[]> {
    return this.afs
      .collection('/Evstation', (ref) =>
        ref.where('accountStatus.status', '==', 'ACTIVE')
      )
      .valueChanges({ idField: 'id' }) as Observable<EvAdminProfile[]>;
  }

  // Method to approve an inactive profile and update its status to "ACTIVE"
  approveProfile(
    profileId: string,
    adminId: string,
    approvedBy: string,
    remark: string,
    status: string
  ): Promise<void> {
    const profileRef = this.afs.collection('/Evstation').doc(profileId);
    return profileRef.update({
      'accountStatus.status': status,
      'accountStatus.adminID': adminId,
      'accountStatus.approvedBy': approvedBy,
      'accountStatus.remark': remark,
      'accountStatus.updatedAt': new Date().toISOString(),
    });
  }

  // Method to get all profiles
  getProfiles(): Observable<EvAdminProfile[]> {
    return this.afs
      .collection<EvAdminProfile>('/Evstation')
      .valueChanges({ idField: 'id' });
  }

  //Getting All Booking data using stationid [id]
  getBookingsByStationId(stationId: string): Observable<Bookingmodel[]> {
    return this.afs
      .collection<Bookingmodel>('EvBookingData', (ref) =>
        ref.where('stationId', '==', stationId)
      )
      .valueChanges();
  }

  // Getting All Bookings
  getAllBookings(): Observable<Bookingmodel[]> {
    return this.afs.collection<Bookingmodel>('EvBookingData').valueChanges();
  }

  //update status of visitingStatus and visitingTimestamp
  updateStatusOfVisit(docId: string, newStatus: string, newTimestamp: number) {
    // Reference to the booking document
    const bookingDocRef = this.afs
      .collection<Bookingmodel>('EvBookingData')
      .doc(docId);

    // Update the fields
    return bookingDocRef.update({
      visitingStatus: newStatus,
      visitingTimeStamp: newTimestamp,
      remark: newStatus,
    });
  }

  //rating by stationId
  getRatingsByStationID(stationId: string): Observable<Ratingmodel[]> {
    return this.afs
      .collection<Ratingmodel>('ratings', (ref) =>
        ref.where('stationId', '==', stationId)
      )
      .valueChanges();
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { EvAdminProfile } from '../model/ev-admin-profile';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

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
}

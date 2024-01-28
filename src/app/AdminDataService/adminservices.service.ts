import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AdminProfileModel } from '../model/admin-profile-model';

@Injectable({
  providedIn: 'root',
})
export class AdminservicesService {
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  //update details firstName,lastName,dob,mobileNo,address
  async updateAdminDetails(
    adminId: string,
    lastName: string,
    firstName: string,
    dob: Date,
    mobileNo: string,
    address: string
  ): Promise<void> {
    try {
      const profileRef = this.afs.collection('/EvAdmin', (ref) =>
        ref.where('adminId', '==', adminId)
      );
      const querySnapshot = await profileRef.get().toPromise();

      if (querySnapshot !== undefined && !querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const docData = doc.data() as AdminProfileModel;

          const updatedProfile: Partial<AdminProfileModel> = {
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            mobileNo: mobileNo,
            address: address,
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
  async uploadProfileImage(
    adminId: string,
    file: File
  ): Promise<string | null> {
    try {
      const filePath = `profile_images/${adminId}_${new Date().getTime()}_${
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
  async updateProfileImage(adminId: string, profilepic: string): Promise<void> {
    try {
      const profileRef = this.afs.collection('/EvAdmin', (ref) =>
        ref.where('adminId', '==', adminId)
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
}

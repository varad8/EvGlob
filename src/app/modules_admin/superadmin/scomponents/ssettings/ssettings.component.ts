import { Component } from '@angular/core';
import { AdminProfileModel } from '../../../../model/admin-profile-model';
import { AuthService } from '../../../../shared/auth.service';
import { AdminservicesService } from '../../../../AdminDataService/adminservices.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ssettings',
  templateUrl: './ssettings.component.html',
  styleUrl: './ssettings.component.css',
})
export class SsettingsComponent {
  adminProfile: AdminProfileModel | undefined;
  selectedFile: File | null = null;
  previewImage: string | null = null;

  constructor(private auth: AuthService, private ads: AdminservicesService) {}
  ngOnInit() {
    // Fetch AdminProfile data
    // Check if there is an existing session with the admin or superadmin accountType
    const sessionUser = this.auth.getAdminSession();
    if (
      (sessionUser && sessionUser.accountType === 'superadmin') ||
      sessionUser?.accountType === 'admin'
    ) {
      this.auth.getAdminProfileUsingID(sessionUser.adminId).then((Profile) => {
        if (Profile) {
          this.adminProfile = Profile;
        }
      });
    } else {
      console.error('User not logged in');
    }
  }

  //select file for profile

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Show preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  //saveAdminDetails
  saveAdminDetails() {
    const adminId = this.adminProfile!.adminId;
    const firstName = this.adminProfile!.firstName;
    const lastName = this.adminProfile!.lastName;
    const dob = this.adminProfile!.dob;
    const mobileNo = this.adminProfile!.mobileNo;
    const address = this.adminProfile!.address;

    // Validate DOB format
    if (!this.validateDOBFormat(dob)) {
      alert('Invalid DOB format. Please use dd/MM/yyyy.');
      return; // Stop execution if DOB format is invalid
    }

    // Call the service method to update the fields
    this.ads
      .updateAdminDetails(adminId, lastName, firstName, dob, mobileNo, address)
      .then(() => {
        alert('Details updated successfully.');
      })
      .catch((error) => {
        alert('Error updating details: ' + error);
      });
  }

  // Function to format Date to dd/MM/yyyy
  formatDateToDDMMYYYY(date: Date | string): string {
    if (typeof date === 'string') {
      // You might need additional parsing logic here based on your date string format
      date = new Date(date);
    }

    if (date instanceof Date && !isNaN(date.getTime())) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
      const year = String(date.getFullYear());

      return `${day}/${month}/${year}`;
    }

    return ''; // Return an empty string if date is not a valid Date object
  }

  // Validate DOB format
  validateDOBFormat(dob: Date | string): boolean {
    const formattedDOB = this.formatDateToDDMMYYYY(dob);
    const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    // Check if the formatted DOB matches the expected format (dd/MM/yyyy)
    return dobRegex.test(formattedDOB);
  }

  //update profile image
  async saveProfilePic() {
    if (this.selectedFile) {
      const adminId = this.adminProfile?.adminId || '';
      let previewEVImage: string | null = this.adminProfile?.profilepic || null;

      console.log('Profile Pic:' + previewEVImage);

      // Check if there's a previous EVImage picture
      if (previewEVImage) {
        // Delete the previous EvImage picture
        await this.ads.deleteProfilePic(
          this.ads.getFilenameFromLink(previewEVImage)
        );
      }

      // Upload the new EVImage picture
      const downloadURL = await this.ads.uploadProfileImage(
        adminId,
        this.selectedFile
      );

      if (downloadURL) {
        // Update profile picture URL in the profile data
        this.adminProfile!.profilepic = downloadURL;
        // Save the updated profile
        await this.ads.updateProfileImage(adminId, downloadURL).then(() => {
          alert('Profile Image Updated successfully');
        });
      }
    }
  }
}

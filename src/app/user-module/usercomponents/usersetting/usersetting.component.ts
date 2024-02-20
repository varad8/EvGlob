import { Component } from '@angular/core';
import { UserProfile } from '../../../model/user-profile';
import { AuthService } from '../../../shared/auth.service';
import { UserservicesService } from '../../../UserDataService/userservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersetting',
  templateUrl: './usersetting.component.html',
  styleUrl: './usersetting.component.css',
})
export class UsersettingComponent {
  userProfile: UserProfile | undefined;
  selectedFile: File | null = null;
  previewImage: string | null = null;

  citiesapiData: any;

  selectedCityName: string = '';
  selectedCityState: string = '';

  onCityChange(event: any): void {
    this.selectedCityName = event.target.value;
    this.selectedCityState = this.getState(this.selectedCityName);

    this.userProfile!.location = {
      city: this.selectedCityName,
      state: this.selectedCityState,
    };
  }

  getState(cityName: string): string {
    const selectedCity = this.citiesapiData.find(
      (city: any) => city.name === cityName
    );
    return selectedCity ? selectedCity.state : '';
  }

  constructor(
    private auth: AuthService,
    private userservice: UserservicesService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    const sessionUser = this.auth.getWebUserSession();
    if (sessionUser?.accountType === 'user') {
      this.auth.getUserProfileUsingID(sessionUser.userid).then((Profile) => {
        if (Profile) {
          this.userProfile = Profile;
        }
      });
    } else {
      console.error('User not logged in');
    }

    // Make an HTTP GET request to the API
    this.http
      .get('https://mocki.io/v1/79c1cf35-6327-4ffc-9e38-16e5a9fba095')
      .subscribe(
        (data: any) => {
          // Assign the received data to the variable
          this.citiesapiData = data;

          // You can now use this.apiData in your component template or perform any other actions with the data
          console.log(data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
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

  //saveUserDetails
  saveUserDetetails() {
    const userid = this.userProfile!.userid;
    const firstName = this.userProfile!.firstname;
    const lastName = this.userProfile!.lastname;
    const dob = this.userProfile!.dob;
    const mobileNo = this.userProfile!.mobile;
    const address = this.userProfile!.address;
    const updateLocattion = this.userProfile!.location;

    // Validate DOB format
    if (!this.validateDOBFormat(dob)) {
      alert('Invalid DOB format. Please use dd/MM/yyyy.');
      return; // Stop execution if DOB format is invalid
    }

    // Call the service method to update the fields
    this.userservice
      .updateUserDetails(
        userid,
        lastName,
        firstName,
        dob,
        mobileNo,
        address,
        updateLocattion
      )
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
      const userid = this.userProfile?.userid || '';
      let previewEVImage: string | null = this.userProfile?.profilepic || null;

      console.log('Profile Pic:' + previewEVImage);

      // Check if there's a previous profile picture
      if (previewEVImage) {
        // Delete the previous profile picture
        await this.userservice.deleteProfilePic(
          this.userservice.getFilenameFromLink(previewEVImage)
        );
      }

      // Upload the new EVImage picture
      const downloadURL = await this.userservice.uploadProfileImage(
        userid,
        this.selectedFile
      );

      if (downloadURL) {
        // Update profile picture URL in the profile data
        this.userProfile!.profilepic = downloadURL;
        // Save the updated profile
        await this.userservice
          .updateProfileImage(userid, downloadURL)
          .then(() => {
            alert('Profile Image Updated successfully');
          });
      }
    }
  }
}

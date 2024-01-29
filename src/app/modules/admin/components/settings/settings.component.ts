import { Component } from '@angular/core';
import { EvAdminProfile } from '../../../../model/ev-admin-profile';
import { AdminserviceService } from '../../../../EvDataService/adminservice.service';
import { AuthService } from '../../../../shared/auth.service';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  evAdminProfile: EvAdminProfile | undefined;
  selectedFile: File | null = null;
  selectedEvFile: File | null = null;
  previewImage: string | null = null;
  evpreviewImage: string | null = null;
  citiesapiData: any;

  selectedCityName: string = '';
  selectedCityState: string = '';

  onCityChange(event: any): void {
    this.selectedCityName = event.target.value;
    this.selectedCityState = this.getState(this.selectedCityName);

    this.evAdminProfile!.location = {
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
    private adminService: AdminserviceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Fetch AdminProfile data
    // Check if there is an existing session with the admin or superadmin accountType
    const sessionUser = this.auth.getSession();
    if (sessionUser && sessionUser.accountType === 'evadmin') {
      this.auth
        .getEvAdminProfileByUserId(sessionUser.userid)
        .subscribe((profile) => {
          if (profile) {
            this.evAdminProfile = profile;
            console.log(this.evAdminProfile);
            if (this.evAdminProfile?.location?.city) {
              this.selectedCityName = this.evAdminProfile.location.city;
              this.selectedCityState = this.getState(this.selectedCityName);

              console.log('City:', this.selectedCityName);
              this.onCityChange({ target: { value: this.selectedCityName } });
            }
          } else {
            console.error('User not found or not logged in');
          }
        });
      // this.evAdminProfile = sessionUser;
      // console.log(this.evAdminProfile);
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

  getDayOfWeek(): DayOfWeek[] {
    return [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
  }

  //save profile basic information
  saveProfile() {
    if (!this.validateDOB(this.evAdminProfile!.profile.dob)) {
      console.error('Invalid date of birth format. Please use dd/mm/yyyy.');
      alert('Invalid date of birth format. Please use dd/mm/yyyy.');
      return;
    }

    if (!this.validateMobileNumber(this.evAdminProfile!.profile.mobile)) {
      alert('Invalid mobile number format. Please use a 10-digit number.');
      console.error(
        'Invalid mobile number format. Please use a 10-digit number.'
      );
      return;
    }

    if (this.validateFirstName(this.evAdminProfile!.profile.firstname)) {
      console.error('Please enter first name');
      alert('Please enter first name');
      return;
    }

    if (this.validateLastName(this.evAdminProfile!.profile.lastname)) {
      console.error('Please enter last name');
      alert('Please enter last name');
      return;
    }

    const userId = this.evAdminProfile!.userid;
    const fieldsToUpdate = {
      firstname: this.evAdminProfile!.profile.firstname,
      lastname: this.evAdminProfile!.profile.lastname,
      dob: this.evAdminProfile!.profile.dob,
      mobile: this.evAdminProfile!.profile.mobile,
    };

    this.adminService
      .updateEvAdminProfileFields(userId, fieldsToUpdate)
      .then(() => {
        alert('Profile fields updated successfully.');
      })
      .catch((error) => {
        alert('Error updating profile fields:' + error);
      });
  }

  validateDOB(dob: string): boolean {
    // Regular expression to match the format dd/mm/yyyy
    const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dobRegex.test(dob);
  }

  validateMobileNumber(mobile: string): boolean {
    // Regular expression to match 10-digit numbers
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  }
  validateFirstName(firstname: string): boolean {
    return firstname == '';
  }
  validateLastName(lastname: string): boolean {
    return lastname == '';
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

  // select file for ev image landscape

  onEvImageFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedEvFile = file;

      // Show preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.evpreviewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // update that evimage
  async saveEvImage() {
    if (this.selectedEvFile) {
      const userId = this.evAdminProfile?.userid || '';
      let previewEVImage: string | null = this.evAdminProfile?.imageUrl || null;

      console.log('Profile Pic:' + previewEVImage);

      // Check if there's a previous EVImage picture
      if (previewEVImage) {
        // Delete the previous EvImage picture
        await this.adminService.deleteEvImage(
          this.adminService.getFilenameFromLink(previewEVImage)
        );
      }

      // Upload the new EVImage picture
      const downloadURL = await this.adminService.uploadEvImage(
        userId,
        this.selectedEvFile
      );

      if (downloadURL) {
        // Update profile picture URL in the profile data
        this.evAdminProfile!.imageUrl = downloadURL;
        // Save the updated profile
        await this.adminService.updateEvImage(userId, downloadURL).then(() => {
          alert('Ev Image Updated successfully');
        });
      }
    }
  }

  //update profile pic of user

  async saveProfilePic() {
    if (this.selectedFile) {
      const userId = this.evAdminProfile?.userid || '';
      let prevProfilePicUrl: string | null =
        this.evAdminProfile?.profile.profilepic || null;

      console.log('Profile Pic:' + prevProfilePicUrl);

      // Check if there's a previous profile picture
      if (prevProfilePicUrl) {
        // Delete the previous profile picture
        await this.adminService.deleteProfilePic(
          this.adminService.getFilenameFromLink(prevProfilePicUrl)
        );
      }

      // Upload the new profile picture
      const downloadURL = await this.adminService.uploadProfilePic(
        userId,
        this.selectedFile
      );

      if (downloadURL) {
        // Update profile picture URL in the profile data
        this.evAdminProfile!.profile.profilepic = downloadURL;
        // Save the updated profile
        this.adminService
          .updateEvAdminProfileFields(userId, this.evAdminProfile!.profile)
          .then(() => {
            alert('Profile Image Uploaded Successfully');
          });
      }
    }
  }

  //Update Evdetails timing / rate /description / title /coordinates

  saveEvDetails() {
    const userId = this.evAdminProfile!.userid;
    const updatedEvTimings = this.evAdminProfile!.evTimings; // Update evTimings
    const updatedRate = this.evAdminProfile!.rate; // Update rate
    const updatedTitle = this.evAdminProfile!.title; // Update title
    const updatedDescription = this.evAdminProfile!.description; // Update description
    const updateLocattion = this.evAdminProfile!.location; //update locatiopn
    const updateCoordinates = this.evAdminProfile!.coordinates; //update coordinates

    // Call the service method to update the fields
    this.adminService
      .updateEVAdminDetails(
        userId,
        updatedEvTimings,
        updatedRate,
        updatedTitle,
        updatedDescription,
        updateLocattion,
        updateCoordinates
      )
      .then(() => {
        alert('Details updated successfully.');
      })
      .catch((error) => {
        alert('Error updating details: ' + error);
      });
  }

  // onchange date on set on that evTimings object

  updateOpeningTime(day: string, event: any) {
    const newValue = (event.target as HTMLInputElement).value;

    // Ensure that day is a valid key
    if (this.isValidDay(day)) {
      const dayTimings = this.evAdminProfile?.evTimings[day] as
        | {
            openingTime: Time;
            closingTime: Time;
          }
        | undefined;

      if (dayTimings) {
        dayTimings.openingTime = this.convertTimeStringToTime(newValue);
        console.log(this.evAdminProfile?.evTimings);
      } else {
        console.error(`Invalid day timings for: ${day}`);
      }
    } else {
      console.error(`Invalid day: ${day}`);
    }
  }

  updateClosingTime(day: string, event: any) {
    const newValue = (event.target as HTMLInputElement).value;

    // Ensure that day is a valid key
    if (this.isValidDay(day)) {
      const dayTimings = this.evAdminProfile?.evTimings[day] as
        | {
            openingTime: Time;
            closingTime: Time;
          }
        | undefined;

      if (dayTimings) {
        dayTimings.closingTime = this.convertTimeStringToTime(newValue);
        console.log(this.evAdminProfile?.evTimings);
      } else {
        console.error(`Invalid day timings for: ${day}`);
      }
    } else {
      console.error(`Invalid day: ${day}`);
    }
  }

  isValidDay(day: string): day is DayOfWeek {
    return [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ].includes(day);
  }

  convertTimeStringToTime(timeString: string): Time {
    const [hours, minutes] = timeString.split(':').map(Number);
    return { hours, minutes };
  }

  //format date to show on input
  formatTime(time: { hours: number; minutes: number }): string {
    // Format hours and minutes to ensure they have leading zeros if necessary
    const formattedHours = ('0' + time.hours).slice(-2); // Ensure 2 digits
    const formattedMinutes = ('0' + time.minutes).slice(-2); // Ensure 2 digits

    // Return the time string in 'HH:mm' format
    return `${formattedHours}:${formattedMinutes}`;
  }
}

import { Component, Pipe, PipeTransform } from '@angular/core';
import { AdminserviceService } from '../../../../EvDataService/adminservice.service';
import { EvAdminProfile } from '../../../../model/ev-admin-profile';
import { AuthService } from '../../../../shared/auth.service';
type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  evAdminProfile: EvAdminProfile | undefined;

  constructor(
    private evdataservice: AdminserviceService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    // Fetch EvAdminProfile data
    // Check if there is an existing session with the evadmin accountType
    const sessionUser = this.auth.getSession();
    if (sessionUser && sessionUser.accountType === 'evadmin') {
      this.auth
        .getEvAdminProfileByUserId(sessionUser.userid)
        .subscribe((profile) => {
          if (profile) {
            this.evAdminProfile = profile;
            console.log(this.evAdminProfile);
          } else {
            console.error('User not found or not logged in');
          }
        });
      // this.evAdminProfile = sessionUser;
      // console.log(this.evAdminProfile);
    } else {
      console.error('User not logged in');
    }
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

  //format date to show on input
  formatTime(time: { hours: number; minutes: number }): string {
    // Format hours and minutes to ensure they have leading zeros if necessary
    const formattedHours = ('0' + time.hours).slice(-2); // Ensure 2 digits
    const formattedMinutes = ('0' + time.minutes).slice(-2); // Ensure 2 digits

    // Return the time string in 'HH:mm' format
    return `${formattedHours}:${formattedMinutes}`;
  }
}

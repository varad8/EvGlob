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

  formatTime(time: { hours: number; minutes: number }): string {
    const hours = time.hours % 12 || 12;
    const minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes;
    const period = time.hours < 12 ? 'AM' : 'PM';
    return `${hours}:${minutes} ${period}`;
  }
}

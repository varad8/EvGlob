import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvAdminProfile } from '../../../../model/ev-admin-profile';
import { AdminserviceService } from '../../../../EvDataService/adminservice.service';
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
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  stationid: any = '';
  evAdminProfile: EvAdminProfile | undefined;

  constructor(
    private route: ActivatedRoute,
    private evdataservice: AdminserviceService
  ) {}

  ngOnInit(): void {
    this.stationid = this.route.snapshot.paramMap.get('stationid');

    if (this.stationid) {
      this.evdataservice
        .getEvAdminProfileByUserId(this.stationid)
        .subscribe((profile) => {
          if (profile) {
            this.evAdminProfile = profile;
            console.log(this.evAdminProfile);
          }
        });
    } else {
      console.error('Error Getting details');
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

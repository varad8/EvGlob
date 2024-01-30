import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { UserservicesService } from '../../UserDataService/userservices.service';
import { EvAdminProfile } from '../../model/ev-admin-profile';
import { AuthService } from '../../shared/auth.service';
type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

@Component({
  selector: 'app-evdetailspage',
  templateUrl: './evdetailspage.component.html',
  styleUrl: './evdetailspage.component.css',
})
export class EvdetailspageComponent {
  stationid: any = '';
  userLoggedStatus: boolean = false;
  station: EvAdminProfile | undefined; // <-- Initialize as undefined
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 13;

  constructor(
    private route: ActivatedRoute,
    private evdata: UserservicesService,
    private userAuth: AuthService
  ) {}

  ngOnInit(): void {
    this.userLoggedStatus = this.userAuth.checkUserLoggedIn();
    this.stationid = this.route.snapshot.paramMap.get('stationid');
    this.populateMarkers();

    // Call the method to fetch EV Stations
    this.evdata.getEvAdminDataByUserId(this.stationid).subscribe(
      (profiles: EvAdminProfile[]) => {
        this.station = profiles[0]; // Assuming you only expect one station
        if (this.station) {
          const { latitude, longitude } = this.station.coordinates;
          this.center = { lat: +latitude, lng: +longitude };
        }
      },
      (error) => {
        console.error('Error fetching EV Stations:', error);
      }
    );
  }

  populateMarkers(): void {
    if (this.station) {
      const { latitude, longitude } = this.station.coordinates;
      this.markerPositions.push({ lat: +latitude, lng: +longitude });
    }
  }

  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }

  // Book Slot Logic here
  bookSlot(stationdata: EvAdminProfile) {
    if (!this.userLoggedStatus) {
      confirm('Please Logged In First');
    }
    console.log(stationdata.userid);
  }

  callNow() {
    confirm('Call Works');
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

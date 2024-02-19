import { Component } from '@angular/core';
import { AdminserviceService } from '../../../../EvDataService/adminservice.service';
import { EvAdminProfile } from '../../../../model/ev-admin-profile';
import { ActivatedRoute } from '@angular/router';
import { Bookingmodel } from '../../../../model/bookingmodel';
import { AuthService } from '../../../../shared/auth.service';
import { UserProfile } from '../../../../model/user-profile';

@Component({
  selector: 'app-bookingev',
  templateUrl: './bookingev.component.html',
  styleUrl: './bookingev.component.css',
})
export class BookingevComponent {
  bookings: Bookingmodel[];
  sid: string | undefined;
  profiles: EvAdminProfile[] = [];
  userProfiles: UserProfile[] = [];
  filteredBookings: Bookingmodel[]; // Added to hold filtered bookings
  filterType: string = 'All'; // Default filter type
  searchTerm: string = ''; // Search term for user ID
  filterDate: string = ''; // Filter date

  constructor(
    private evdata: AdminserviceService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    //Getting All profiles data
    this.evdata.getProfiles().subscribe(
      (profiles) => {
        this.profiles = profiles;
      },
      (error) => {
        console.error('Error getting profiles:', error);
      }
    );

    //Getting QueryParams from URL
    this.route.queryParams.subscribe((params) => {
      this.sid = params['sid'];
      this.getBookings();
    });
  }

  //Getting all booking data according that station id
  async getBookings(): Promise<void> {
    this.evdata.getBookingsByStationId(this.sid).subscribe(async (bookings) => {
      this.bookings = bookings;

      // Fetch user profiles for each booking
      for (const booking of this.bookings) {
        if (booking.userId) {
          const userProfile = await this.auth.getUserUsingID(booking.userId);
          if (userProfile) {
            this.userProfiles.push(userProfile);
          }
        }
      }

      // Sort bookings
      this.filteredBookings = this.bookings.sort((a, b) => {
        // Convert dates to Date objects
        const dateA = new Date(a.bookedForDate);
        const dateB = new Date(b.bookedForDate);

        // Check if the status is "not visited" and the date is past
        const aNotVisitedExpired =
          a.visitingStatus === 'not visited' && dateA < new Date();
        const bNotVisitedExpired =
          b.visitingStatus === 'not visited' && dateB < new Date();

        // If both are "not visited" and expired, keep the original order
        if (aNotVisitedExpired && bNotVisitedExpired) {
          return 0;
        }

        // If one is "not visited" and expired, move it to the end
        if (aNotVisitedExpired && !bNotVisitedExpired) {
          return 1;
        }
        if (!aNotVisitedExpired && bNotVisitedExpired) {
          return -1;
        }

        // Otherwise, sort by bookedForDate
        return dateA.getTime() - dateB.getTime();
      });
    });
  }

  // Method to filter bookings by date
  filterBookingsByDate(filterType: string): void {
    const currentDate = new Date();
    switch (filterType) {
      case 'Today':
        this.filteredBookings = this.bookings.filter(
          (booking) =>
            new Date(booking.bookedForDate).toDateString() ===
            currentDate.toDateString()
        );
        break;
      case 'Upcoming':
        this.filteredBookings = this.bookings.filter(
          (booking) => new Date(booking.bookedForDate) > currentDate
        );
        break;
      case 'Yesterday':
        const yesterday = new Date(currentDate);
        yesterday.setDate(currentDate.getDate() - 1);
        this.filteredBookings = this.bookings.filter(
          (booking) =>
            new Date(booking.bookedForDate).toDateString() ===
            yesterday.toDateString()
        );
        break;

      default:
        this.filteredBookings = this.bookings;
        break;
    }
  }

  // Method to filter bookings by user ID
  searchByUserID(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredBookings = this.bookings.filter((booking) =>
        booking.userId.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredBookings = this.bookings;
    }
  }

  //filter by date
  searchDate(): void {
    if (this.filterDate) {
      this.filteredBookings = this.bookings.filter(
        (booking) =>
          new Date(booking.bookedForDate).toDateString() ===
          new Date(this.filterDate).toDateString()
      );
    } else {
      this.filteredBookings = this.bookings;
    }
  }

  //calculating the end time
  calculateExpectedEndTime(startTime: string, durationHours: string): string {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const durationHoursNumber = parseFloat(durationHours);
    let endHour = startHour + Math.floor(durationHoursNumber);
    let endMinute =
      startMinute +
      Math.round((durationHoursNumber - Math.floor(durationHoursNumber)) * 60);
    if (endMinute >= 60) {
      endHour += Math.floor(endMinute / 60);
      endMinute %= 60;
    }
    if (endHour >= 24) {
      endHour %= 24;
    }
    const endHourString = String(endHour).padStart(2, '0');
    const endMinuteString = String(endMinute).padStart(2, '0');

    return `${endHourString}:${endMinuteString}`;
  }
}

import { Component } from '@angular/core';
import { Bookingmodel } from '../../../../model/bookingmodel';
import { UserProfile } from '../../../../model/user-profile';
import { AdminserviceService } from '../../../../EvDataService/adminservice.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../shared/auth.service';
import { EvAdminProfile } from '../../../../model/ev-admin-profile';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  bookings: Bookingmodel[];
  userProfiles: UserProfile[] = [];
  filteredBookings: Bookingmodel[];
  filterType: string = 'All';
  searchTerm: string = '';
  filterDate: string = '';
  searchUserId: string = '';
  session: EvAdminProfile;

  constructor(
    private evdata: AdminserviceService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.session = this.auth.getSession();
    this.getBookings(this.session.id);
  }

  async getBookings(stationid: string): Promise<void> {
    this.evdata
      .getBookingsByStationId(stationid)
      .subscribe(async (bookings) => {
        this.bookings = bookings;

        for (const booking of this.bookings) {
          if (booking.userId) {
            const userProfile = await this.auth.getUserUsingID(booking.userId);
            if (userProfile) {
              this.userProfiles.push(userProfile);
            }
          }
        }

        this.filteredBookings = this.bookings;
        this.filterBookings();
      });
  }

  filterBookings(): void {
    let tempBookings = [...this.bookings];

    if (this.filterType === 'Today') {
      const currentDate = new Date();
      tempBookings = tempBookings.filter(
        (booking) =>
          new Date(booking.bookedForDate).toDateString() ===
          currentDate.toDateString()
      );
    } else if (this.filterType === 'Upcoming') {
      const currentDate = new Date();
      tempBookings = tempBookings.filter(
        (booking) => new Date(booking.bookedForDate) > currentDate
      );
    } else if (this.filterType === 'Yesterday') {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      tempBookings = tempBookings.filter(
        (booking) =>
          new Date(booking.bookedForDate).toDateString() ===
          yesterday.toDateString()
      );
    } else if (this.filterType === 'Visited') {
      tempBookings = tempBookings.filter(
        (booking) => booking.visitingStatus === 'visited'
      );
    } else if (this.filterType === 'NotVisited') {
      tempBookings = tempBookings.filter(
        (booking) => booking.visitingStatus === 'not visited'
      );
    }

    if (this.searchTerm.trim() !== '') {
      tempBookings = tempBookings.filter((booking) =>
        this.userProfiles.some((userProfile) =>
          userProfile.email
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        )
      );
    }

    if (this.filterDate) {
      tempBookings = tempBookings.filter(
        (booking) =>
          new Date(booking.bookedForDate).toDateString() ===
          new Date(this.filterDate).toDateString()
      );
    }

    if (this.searchUserId.trim() !== '') {
      tempBookings = tempBookings.filter((booking) =>
        booking.userId.toLowerCase().includes(this.searchUserId.toLowerCase())
      );
    }

    // Sort bookings
    tempBookings = tempBookings.sort((a, b) => {
      const currentDate = new Date();
      const aBookingDate = new Date(a.bookedForDate);
      const bBookingDate = new Date(b.bookedForDate);

      if (a.visitingStatus === 'visited' && b.visitingStatus !== 'visited') {
        return 1; // Move 'visited' records to the end
      } else if (
        a.visitingStatus !== 'visited' &&
        b.visitingStatus === 'visited'
      ) {
        return -1; // Keep 'not visited' records before 'visited' records
      } else if (aBookingDate < currentDate && bBookingDate < currentDate) {
        // If both booking dates are in the past, sort by booking date in ascending order
        return aBookingDate.getTime() - bBookingDate.getTime();
      } else if (aBookingDate < currentDate) {
        // If only aBookingDate is in the past, move it to the end
        return 1;
      } else if (bBookingDate < currentDate) {
        // If only bBookingDate is in the past, move it to the end
        return -1;
      } else {
        // Both booking dates are in the future, sort by booking date in ascending order
        return aBookingDate.getTime() - bBookingDate.getTime();
      }
    });

    this.filteredBookings = tempBookings;
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

  isFutureTime(bookedForDate: string, endTime: string): boolean {
    const currentDate = new Date();
    const bookingDate = new Date(bookedForDate);

    const [hours, minutes] = endTime.split(':').map(Number);
    bookingDate.setHours(hours, minutes, 0);

    return bookingDate.getTime() > currentDate.getTime();
  }

  //update booking status by using that id
  updateStatusToVisited(bookingData: Bookingmodel): void {
    // Construct the message with booking information
    const confirmationMessage = `Are you sure you want to update the booking status to "visited" for the following booking?\n\nUser Id: ${
      bookingData.userId
    }\nStation Id: ${bookingData.stationId}\nBooked For: ${
      bookingData.bookedForDate
    }\nTime: ${bookingData.timeForBooked}\nHours of Booking: ${
      bookingData.totalHoursEvBooking
    } hrs.\nExpected End Time: ${this.calculateExpectedEndTime(
      bookingData.timeForBooked,
      bookingData.totalHoursEvBooking
    )}\nStatus: ${bookingData.visitingStatus}\nBooking Slot: ${
      bookingData.bookingSlot
    }\nTotal Payable: ₹${bookingData.totalPayable}\nRemark: ${
      bookingData.remark
    }`;

    // Ask for confirmation before updating the status
    const confirmUpdate = confirm(confirmationMessage);

    if (confirmUpdate) {
      const newStatus = 'visited';
      const newTimestamp = Date.now();

      this.evdata
        .updateStatusOfVisit(bookingData.bookingRefId, newStatus, newTimestamp)
        .then(() => {
          console.log('Booking status updated to visited successfully');
          alert('Booking status updated to visited successfully');
        })
        .catch((error) => {
          console.error('Error updating booking status:', error);
          alert('Error updating booking status:' + error);
        });
    } else {
      console.log('Update cancelled by user');
      alert('Update cancelled by user');
    }
  }
}

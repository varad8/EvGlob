import { Component } from '@angular/core';
import { Bookingmodel } from '../../../model/bookingmodel';
import { UserservicesService } from '../../../UserDataService/userservices.service';
import { AuthService } from '../../../shared/auth.service';
import { UserProfile } from '../../../model/user-profile';
import { Ratingmodel } from '../../../model/ratingmodel';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrl: './userbooking.component.css',
})
export class UserbookingComponent {
  bookings: Bookingmodel[] | undefined;
  userProfiles: UserProfile[] = [];
  filteredBookings: Bookingmodel[];
  filterType: string = 'All';
  searchTerm: string = '';
  filterDate: string = '';
  stationid: string = '';
  session: UserProfile;
  showModal: boolean = false;
  selectedBooking: Bookingmodel;
  feedbackMsg: string = '';

  constructor(
    private userservice: UserservicesService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.session = this.auth.getWebUserSession();
    console.log(this.session.id);
    this.getBookings(this.session.id);
  }

  async getBookings(userid: string): Promise<void> {
    this.userservice.getBookingsByUserId(userid).subscribe(async (bookings) => {
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

    if (this.stationid.trim() !== '') {
      tempBookings = tempBookings.filter((booking) =>
        booking.stationId.toLowerCase().includes(this.stationid.toLowerCase())
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

  rateUse(bookingdata: Bookingmodel) {
    console.log(bookingdata);
  }

  // Function to toggle the modal visibility
  toggleModal(dataofbooking: Bookingmodel) {
    this.selectedBooking = dataofbooking;
    this.showModal = !this.showModal;

    // Call the method to get rating data for the selected booking

    this.userservice
      .getRatingByUserIdAndStationId(
        dataofbooking.userId,
        dataofbooking.stationId
      )
      .subscribe((ratingData: Ratingmodel[]) => {
        // Handle the rating data here, such as displaying it in the modal
        console.log('Rating data:', ratingData[0]);
        if (ratingData.length > 0) {
          this.filledStars = ratingData[0].rating;
        } else {
          this.filledStars = 0; // If no rating data found, set filledStars to 0
        }
        this.feedbackMsg = ratingData[0]?.feedbackMsg || ''; // Set feedback message
        this.updateStars();
      });
  }

  toggleClose() {
    this.showModal = false;
    this.filledStars = 0;
    this.updateStars();
    this.feedbackMsg = '';
    this.selectedBooking = undefined;
    this.showModal = false;
  }

  filledStars: number = 0;
  stars: { class: string }[] = [
    { class: 'w-12 h-12 text-gray-500' },
    { class: 'w-12 h-12 text-gray-500' },
    { class: 'w-12 h-12 text-gray-500' },
    { class: 'w-12 h-12 text-gray-500' },
    { class: 'w-12 h-12 text-gray-500' },
  ];

  rate(index: number): void {
    if (index === this.filledStars - 1) {
      // If the user clicks on the currently filled star, deselect it
      this.filledStars = Math.max(0, this.filledStars - 1); // Ensure it doesn't go below 0
    } else {
      // Otherwise, update the filled stars count
      this.filledStars = Math.min(index + 1, 5); // Ensure it doesn't exceed 5
    }
    this.updateStars();
  }

  updateStars(): void {
    this.stars.forEach((star, i) => {
      star.class =
        i < this.filledStars
          ? 'w-12 h-12 text-yellow-500'
          : 'w-12 h-12 text-gray-500';
    });
  }

  rateNow(bookingData: Bookingmodel): void {
    // Create a Ratingmodel object with the necessary data
    const ratingData: Ratingmodel = {
      docid: '',
      stationId: bookingData.stationId,
      userId: bookingData.userId,
      rating: this.filledStars,
      feedbackMsg: this.feedbackMsg,
    };

    // Call the saveOrUpdateRating method with the ratingData
    this.userservice
      .saveOrUpdateRating(ratingData)
      .then(() => {
        this.filledStars = 0;
        this.updateStars();
        this.feedbackMsg = '';
        this.selectedBooking = undefined;
        this.showModal = false;
        alert('Rating saved successfully!');
      })
      .catch((error) => {
        alert('Error saving rating: ' + error);
      });
  }
}

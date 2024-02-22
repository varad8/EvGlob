import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { EvAdminProfile } from '../../model/ev-admin-profile';
import { UserservicesService } from '../../UserDataService/userservices.service';
import { UserProfile } from '../../model/user-profile';
import { Bookingmodel } from '../../model/bookingmodel';
import { forkJoin } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-searchevform',
  templateUrl: './searchevform.component.html',
  styleUrl: './searchevform.component.css',
})
export class SearchevformComponent {
  selectedCityName: string = '';
  selectedCityState: string = '';
  selectedSlot: string;
  selectedDate: string;
  selectedTime: string;
  selectedHours: string;
  evStationProfile: EvAdminProfile[];
  session: UserProfile;
  evBookingData: Bookingmodel[];
  showModal: boolean = false;
  timeSuggestion: {
    station: EvAdminProfile;
    suggestions: { start: string; end: string }[];
    slot: string;
    hours: string;
  }[] = [];

  citiesapiData: any;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private userservice: UserservicesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.session = this.auth.getWebUserSession();

    // Make an HTTP GET request to the API
    this.http
      .get('https://mocki.io/v1/79c1cf35-6327-4ffc-9e38-16e5a9fba095')
      .subscribe(
        (data: any) => {
          // Assign the received data to the variable
          this.citiesapiData = data;

          // You can now use this.apiData in your component template or perform any other actions with the data
          // console.log(data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );

    //call that get all booking data according
    this.getData();
  }
  getData() {
    this.userservice
      .getEvAdminProfiles()
      .subscribe((evAdminProfiles: EvAdminProfile[]) => {
        this.evStationProfile = evAdminProfiles;
      });

    //call that get all ev station profile
    this.userservice
      .getAllBookingData()
      .subscribe((bookindata: Bookingmodel[]) => {
        this.evBookingData = bookindata;
      });
  }

  //get selected city and state
  onCityChange(event: any): void {
    this.selectedCityName = event.target.value;
    this.selectedCityState = this.getState(this.selectedCityName);
  }

  onTimeChange() {
    this.getData();
  }

  onDateChange() {
    this.getData();
  }
  onHoursChange() {
    this.getData();
  }
  onSlotChange() {
    this.getData();
  }
  //get Selected state
  getState(cityName: string): string {
    const selectedCity = this.citiesapiData.find(
      (city: any) => city.name === cityName
    );
    return selectedCity ? selectedCity.state : '';
  }

  onSearch(city: string, state: string) {
    this.timeSuggestion = [];
    if (
      !this.selectedDate ||
      !this.selectedSlot ||
      !this.selectedHours ||
      !this.selectedTime
    ) {
      console.error('Missing required parameters.');
      return;
    }

    const dayOfWeek = this.getDateOfWeek(this.selectedHours);

    // Filter out objects from evStationProfile that match the provided city and state
    this.evStationProfile = this.evStationProfile.filter(
      (station) =>
        station.location.city === city && station.location.state === state
    );

    console.log(this.evStationProfile);

    // Filter booking data to show only bookings for the selected station and date
    // Array to hold all filtered booking data for all station profiles
    const filteredBookingData: Bookingmodel[] = [];

    // Iterate over each station profile
    this.evStationProfile.forEach((station) => {
      // Filter booking data to show only bookings for the current station profile and selected date
      const stationBookings = this.evBookingData.filter(
        (booking) =>
          booking.stationId === station.id &&
          booking.bookedForDate === this.selectedDate &&
          booking.bookingSlot === this.selectedSlot
      );

      // Concatenate stationBookings to filteredBookingData
      filteredBookingData.push(...stationBookings);
    });

    // Assign filtered booking data to evBookingData
    this.evBookingData = filteredBookingData;

    console.log(this.evBookingData);
    this.getBookingData();
  }

  getBookingData() {
    const dayOfWeek = this.getDateOfWeek(this.selectedDate);

    if (
      !this.selectedDate ||
      !this.selectedSlot ||
      !this.evStationProfile ||
      !this.selectedHours ||
      !this.evBookingData ||
      !this.selectedTime
    ) {
      console.error('Missing required parameters.');
      return;
    }

    const currentDate = new Date();
    const selectedDateTime = new Date(
      this.selectedDate + 'T' + this.selectedTime
    );

    // Check if the selected date and time are in the past
    if (selectedDateTime < currentDate) {
      alert('Selected date or time is in the past.');
      console.error('Selected date or time is in the past.');
      return;
    }

    this.generateTimeSuggestions();
  }

  getDateOfWeek(dateString: string): string {
    const days: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const date: Date = new Date(dateString);
    const dayOfWeek: string = days[date.getDay()];
    return dayOfWeek;
  }

  closeModal() {
    this.showModal = false;
  }

  //This is first old
  // generateTimeSuggestions() {
  //   // Convert selectedHours to a number
  //   const selectedHours = parseInt(this.selectedHours, 10);

  //   this.evStationProfile.forEach((station) => {
  //     // Get the opening and closing times for the selected day
  //     const dayOfWeek = this.getDateOfWeek(this.selectedDate);
  //     const openingTime = station.evTimings[dayOfWeek].openingTime;
  //     const closingTime = station.evTimings[dayOfWeek].closingTime;

  //     // Calculate the opening and closing DateTime based on the selected date
  //     const openingDateTime = new Date(this.selectedDate);
  //     openingDateTime.setHours(openingTime.hours, openingTime.minutes, 0, 0);

  //     const closingDateTime = new Date(this.selectedDate);
  //     closingDateTime.setHours(closingTime.hours, closingTime.minutes, 0, 0);

  //     // Filter the booking data for the current station
  //     const stationBookings = this.evBookingData.filter(
  //       (booking) => booking.stationId === station.id
  //     );

  //     // Generate suggestions for empty slots based on selected hours and filtered bookings
  //     const suggestions = [];
  //     let currentSlotStart = new Date(openingDateTime.getTime());

  //     while (currentSlotStart < closingDateTime) {
  //       // Calculate the end time of the current slot
  //       const currentSlotEnd = new Date(currentSlotStart.getTime());
  //       currentSlotEnd.setHours(currentSlotEnd.getHours() + selectedHours);

  //       // Check if the current slot overlaps with any existing bookings for this station
  //       const overlappingBooking = stationBookings.some((booking) => {
  //         const bookingStart = new Date(
  //           booking.bookedForDate + 'T' + booking.timeForBooked
  //         );
  //         const bookingEnd = new Date(bookingStart.getTime());
  //         bookingEnd.setHours(
  //           bookingEnd.getHours() + parseInt(booking.totalHoursEvBooking, 10)
  //         );

  //         return (
  //           (currentSlotStart >= bookingStart &&
  //             currentSlotStart < bookingEnd) ||
  //           (currentSlotEnd > bookingStart && currentSlotEnd <= bookingEnd) ||
  //           (currentSlotStart <= bookingStart && currentSlotEnd >= bookingEnd)
  //         );
  //       });

  //       // If the current slot is not booked, add it to suggestions
  //       if (!overlappingBooking) {
  //         suggestions.push({
  //           start: currentSlotStart.toLocaleTimeString([], {
  //             hour: '2-digit',
  //             minute: '2-digit',
  //           }),
  //           end: currentSlotEnd.toLocaleTimeString([], {
  //             hour: '2-digit',
  //             minute: '2-digit',
  //           }),
  //         });
  //       }

  //       // Move to the next slot
  //       currentSlotStart.setHours(currentSlotStart.getHours() + selectedHours);
  //     }

  //     // Push the station profile and suggestions to timeSuggestion array
  //     this.timeSuggestion.push({
  //       station: station,
  //       suggestions: suggestions,
  //     });
  //   });

  //   this.showModal = true;
  // }

  // This is second latest
  // generateTimeSuggestions() {
  //   // Convert selectedHours to a number
  //   const selectedHours = parseInt(this.selectedHours, 10);

  //   this.evStationProfile.forEach((station) => {
  //     // Get the opening and closing times for the selected day
  //     const dayOfWeek = this.getDateOfWeek(this.selectedDate);
  //     const openingTime = station.evTimings[dayOfWeek].openingTime;
  //     const closingTime = station.evTimings[dayOfWeek].closingTime;

  //     // Calculate the opening and closing DateTime based on the selected date
  //     const openingDateTime = new Date(this.selectedDate);
  //     openingDateTime.setHours(openingTime.hours, openingTime.minutes, 0, 0);

  //     const closingDateTime = new Date(this.selectedDate);
  //     closingDateTime.setHours(closingTime.hours, closingTime.minutes, 0, 0);

  //     // Filter the booking data for the current station
  //     const stationBookings = this.evBookingData.filter(
  //       (booking) => booking.stationId === station.id
  //     );

  //     // Generate suggestions for empty slots based on selected hours and filtered bookings
  //     const suggestions = [];
  //     let currentSlotStart = new Date(openingDateTime.getTime());

  //     while (currentSlotStart < closingDateTime) {
  //       // Calculate the end time of the current slot
  //       const currentSlotEnd = new Date(currentSlotStart.getTime());
  //       currentSlotEnd.setHours(currentSlotEnd.getHours() + selectedHours);

  //       // If the end time exceeds the closing time, break out of the loop
  //       if (currentSlotEnd > closingDateTime) {
  //         break;
  //       }

  //       // Check if the current slot overlaps with any existing bookings for this station
  //       const overlappingBooking = stationBookings.some((booking) => {
  //         const bookingStart = new Date(
  //           booking.bookedForDate + 'T' + booking.timeForBooked
  //         );
  //         const bookingEnd = new Date(bookingStart.getTime());
  //         bookingEnd.setHours(
  //           bookingEnd.getHours() + parseInt(booking.totalHoursEvBooking, 10)
  //         );

  //         return (
  //           (currentSlotStart >= bookingStart &&
  //             currentSlotStart < bookingEnd) ||
  //           (currentSlotEnd > bookingStart && currentSlotEnd <= bookingEnd) ||
  //           (currentSlotStart <= bookingStart && currentSlotEnd >= bookingEnd)
  //         );
  //       });

  //       // If the current slot is not booked, add it to suggestions
  //       if (!overlappingBooking) {
  //         suggestions.push({
  //           start: currentSlotStart.toLocaleTimeString([], {
  //             hour: '2-digit',
  //             minute: '2-digit',
  //           }),
  //           end: currentSlotEnd.toLocaleTimeString([], {
  //             hour: '2-digit',
  //             minute: '2-digit',
  //           }),
  //         });
  //       }

  //       // Move to the next slot
  //       currentSlotStart.setHours(currentSlotStart.getHours() + selectedHours);
  //     }

  //     // Push the station profile and suggestions to timeSuggestion array
  //     this.timeSuggestion.push({
  //       station: station,
  //       suggestions: suggestions,
  //       slot: this.selectedSlot,
  //       hours: this.selectedHours,
  //     });
  //   });

  //   this.showModal = true; // You may want to move this outside the forEach loop if it should be triggered only once
  // }

  generateTimeSuggestions() {
    // Convert selectedHours to a number
    const selectedHours = parseInt(this.selectedHours, 10);

    this.evStationProfile.forEach((station) => {
      // Get the opening and closing times for the selected day
      const dayOfWeek = this.getDateOfWeek(this.selectedDate);
      const openingTime = station.evTimings[dayOfWeek].openingTime;
      const closingTime = station.evTimings[dayOfWeek].closingTime;

      // Calculate the opening and closing DateTime based on the selected date
      const openingDateTime = new Date(this.selectedDate);
      openingDateTime.setHours(openingTime.hours, openingTime.minutes, 0, 0);

      const closingDateTime = new Date(this.selectedDate);
      closingDateTime.setHours(closingTime.hours, closingTime.minutes, 0, 0);

      // Filter the booking data for the current station
      const stationBookings = this.evBookingData.filter(
        (booking) => booking.stationId === station.id
      );

      // Determine the starting time for generating suggestions
      let currentSlotStart = new Date();
      const currentDate = new Date();

      // If the selected date is the current date, check if the current time is later than the opening time
      if (currentDate.toDateString() === openingDateTime.toDateString()) {
        const openingDateTimeWithCurrentDate = new Date(currentDate);
        openingDateTimeWithCurrentDate.setHours(
          openingTime.hours,
          openingTime.minutes,
          0,
          0
        );

        // If the current time is later than the opening time, use the current time as the starting point
        if (currentDate >= openingDateTimeWithCurrentDate) {
          currentSlotStart = new Date(currentDate);
        } else {
          currentSlotStart = new Date(openingDateTimeWithCurrentDate.getTime());
        }
      } else {
        // Use regular opening time as the starting point
        currentSlotStart = new Date(openingDateTime.getTime());
      }

      // Generate suggestions for empty slots based on selected hours and filtered bookings
      const suggestions = [];

      while (currentSlotStart < closingDateTime) {
        // Calculate the end time of the current slot
        const currentSlotEnd = new Date(currentSlotStart.getTime());
        currentSlotEnd.setHours(currentSlotEnd.getHours() + selectedHours);

        // If the end time exceeds the closing time, break out of the loop
        if (currentSlotEnd > closingDateTime) {
          break;
        }

        // Check if the current slot overlaps with any existing bookings for this station
        const overlappingBooking = stationBookings.some((booking) => {
          const bookingStart = new Date(
            booking.bookedForDate + 'T' + booking.timeForBooked
          );
          const bookingEnd = new Date(bookingStart.getTime());
          bookingEnd.setHours(
            bookingEnd.getHours() + parseInt(booking.totalHoursEvBooking, 10)
          );

          return (
            (currentSlotStart >= bookingStart &&
              currentSlotStart < bookingEnd) ||
            (currentSlotEnd > bookingStart && currentSlotEnd <= bookingEnd) ||
            (currentSlotStart <= bookingStart && currentSlotEnd >= bookingEnd)
          );
        });

        // If the current slot is not booked, add it to suggestions
        if (!overlappingBooking) {
          suggestions.push({
            start: currentSlotStart.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
            end: currentSlotEnd.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          });
        }

        // Move to the next slot
        currentSlotStart.setHours(currentSlotStart.getHours() + selectedHours);
      }

      // Push the station profile and suggestions to timeSuggestion array
      this.timeSuggestion.push({
        station: station,
        suggestions: suggestions,
        slot: this.selectedSlot,
        hours: this.selectedHours,
      });
    });

    this.showModal = true; // You may want to move this outside the forEach loop if it should be triggered only once
  }

  selectedSlotByUser(
    startTime: string,
    endTime: string,
    stationId: string,
    slot: string,
    hours: string,
    date: string
  ) {
    // Implement your logic here to handle the selected slot
    console.log(
      `Selected slot: ${startTime} - ${endTime}, Station ID: ${stationId}`
    );
    // Example: Navigate to the details page with the selected slot and station ID
    this.router.navigate(['/evstation', stationId], {
      queryParams: {
        timing: `${startTime}`,
        slot: slot,
        hours: hours,
        date: date,
      },
    });
  }
}

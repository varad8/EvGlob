// import { Component } from '@angular/core';
// import { AuthService } from '../../shared/auth.service';
// import { HttpClient } from '@angular/common/http';
// import { EvAdminProfile } from '../../model/ev-admin-profile';
// import { UserservicesService } from '../../UserDataService/userservices.service';
// import { UserProfile } from '../../model/user-profile';
// import { Bookingmodel } from '../../model/bookingmodel';

// @Component({
//   selector: 'app-searchevform',
//   templateUrl: './searchevform.component.html',
//   styleUrl: './searchevform.component.css',
// })
// export class SearchevformComponent {
//   selectedCityName: string = '';
//   selectedCityState: string = '';
//   selectedSlot: string;
//   selectedDate: string;
//   selectedTime: string;
//   selectedHours: string;
//   evStationData: EvAdminProfile[];
//   session: UserProfile;
//   evBookingData: Bookingmodel[];

//   citiesapiData: any;

//   constructor(
//     private auth: AuthService,
//     private http: HttpClient,
//     private userservice: UserservicesService
//   ) {}

//   ngOnInit() {
//     this.session = this.auth.getWebUserSession();

//     // Make an HTTP GET request to the API
//     this.http
//       .get('https://mocki.io/v1/79c1cf35-6327-4ffc-9e38-16e5a9fba095')
//       .subscribe(
//         (data: any) => {
//           // Assign the received data to the variable
//           this.citiesapiData = data;

//           // You can now use this.apiData in your component template or perform any other actions with the data
//           // console.log(data);
//         },
//         (error) => {
//           console.error('Error fetching data:', error);
//         }
//       );
//   }

//   //get selected city and state
//   onCityChange(event: any): void {
//     this.selectedCityName = event.target.value;
//     this.selectedCityState = this.getState(this.selectedCityName);
//   }

//   //get Selected state
//   getState(cityName: string): string {
//     const selectedCity = this.citiesapiData.find(
//       (city: any) => city.name === cityName
//     );
//     return selectedCity ? selectedCity.state : '';
//   }

//   onSearch(city: string, state: string) {
//     console.log(city, state);

//     if (this.session) {
//       if (city && state) {
//         this.userservice
//           .getEvAdminProfileByLocation(city, state)
//           .subscribe((data: EvAdminProfile[]) => {
//             this.evStationData = data;
//             console.log('EV station data:', this.evStationData);

//             // Check slot availability after getting evStationData
//             this.checkSlotAvailability();
//           });
//       } else {
//         alert('select location');
//       }
//     } else {
//       alert('Logged in first');
//     }
//   }

//   checkSlotAvailability() {
//     if (
//       !this.selectedDate ||
//       !this.selectedSlot ||
//       !this.selectedTime ||
//       !this.evStationData ||
//       !this.selectedHours
//     ) {
//       console.error('Missing required parameters.');
//       return;
//     }

//     const currentDate = new Date();
//     const selectedDateTime = new Date(
//       this.selectedDate + 'T' + this.selectedTime
//     );

//     // Check if the selected date and time are in the past
//     if (selectedDateTime < currentDate) {
//       alert('Selected date or time is in the past.');
//       console.error('Selected date or time is in the past.');
//       return;
//     }

//     this.evStationData.forEach((station: EvAdminProfile) => {
//       const stationId = station.id;
//       // Check if evTimings[selectedDay] is defined before accessing its properties
//       const selectedDay = selectedDateTime.getDay();
//       const selectedDayTimings = station.evTimings[selectedDay];
//       if (!selectedDayTimings) {
//         console.error(
//           `No timing information available for ${stationId} on selected day.`
//         );
//         return;
//       }
//       const openingTime = new Date(
//         selectedDayTimings.openingTime.seconds * 1000
//       );
//       const closingTime = new Date(
//         selectedDayTimings.closingTime.seconds * 1000
//       );

//       // Calculate expected end time based on selected time and duration
//       const expectedEndTime = this.calculateEndTime(
//         this.selectedTime,
//         this.selectedHours
//       );

//       // Check if the expected end time exceeds the closing time
//       const expectedEndTimeDate = new Date(
//         this.selectedDate + 'T' + expectedEndTime
//       );
//       if (expectedEndTimeDate > closingTime) {
//         console.log(
//           `Expected end time exceeds closing time for station ${stationId}.`
//         );
//         return;
//       }

//       // Retrieve booking data for the station, date, and slot
//       this.userservice
//         .getBookingDataByStationIdAndDate(
//           stationId,
//           this.selectedDate,
//           this.selectedSlot
//         )
//         .subscribe((bookings: Bookingmodel[]) => {
//           console.log(
//             `Booking data for station ${stationId} on ${this.selectedDate} for slot ${this.selectedSlot}:`,
//             bookings
//           );

//           // Implement logic to check slot availability and suggest available slots
//           const availableSlots = this.findAvailableSlots(
//             bookings,
//             openingTime,
//             closingTime
//           );
//           console.log(
//             `Available slots for station ${stationId}:`,
//             availableSlots
//           );
//         });
//     });
//   }

//   findAvailableSlots(
//     bookings: Bookingmodel[],
//     openingTime: Date,
//     closingTime: Date
//   ): string[] {
//     const availableSlots: string[] = [];
//     const durationHours = parseInt(this.selectedHours, 10);
//     const startTime = new Date(this.selectedDate + 'T' + this.selectedTime);

//     // Iterate through the opening and closing times to find available slots
//     let currentTime = new Date(startTime);
//     while (currentTime <= closingTime) {
//       // Check if there is any booking within the current time slot
//       const endTime = new Date(
//         currentTime.getTime() + durationHours * 60 * 60 * 1000
//       );
//       const isBookingConflict = bookings.some((booking) => {
//         const bookingStartTime = new Date(booking.timeForBooked);
//         const bookingEndTime = new Date(
//           bookingStartTime.getTime() +
//             parseInt(booking.totalHoursEvBooking, 10) * 60 * 60 * 1000
//         );
//         return bookingStartTime < endTime && bookingEndTime > currentTime;
//       });

//       // If no booking conflicts, add the slot to available slots
//       if (!isBookingConflict && currentTime >= openingTime) {
//         availableSlots.push(
//           currentTime.toLocaleTimeString([], {
//             hour: '2-digit',
//             minute: '2-digit',
//           })
//         );
//       }

//       // Move to the next time slot
//       currentTime = new Date(
//         currentTime.getTime() + (durationHours + 1) * 60 * 60 * 1000
//       );
//     }

//     return availableSlots;
//   }

//   calculateEndTime(selectedTime: string, selectedHours: string): string {
//     // Parse the selected time and duration
//     const timeParts = selectedTime.split(':');
//     const durationHours = parseInt(selectedHours, 10);

//     if (timeParts.length !== 2 || isNaN(durationHours)) {
//       console.error('Invalid time or duration');
//       return '';
//     }

//     const startTime = new Date();
//     startTime.setHours(
//       parseInt(timeParts[0], 10),
//       parseInt(timeParts[1], 10),
//       0
//     );

//     // Calculate end time by adding duration
//     const endTime = new Date(
//       startTime.getTime() + durationHours * 60 * 60 * 1000
//     );

//     // Format end time back to a string
//     const formattedEndTime =
//       endTime.getHours().toString().padStart(2, '0') +
//       ':' +
//       endTime.getMinutes().toString().padStart(2, '0');

//     return formattedEndTime;
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { EvAdminProfile } from '../../model/ev-admin-profile';
import { UserservicesService } from '../../UserDataService/userservices.service';
import { UserProfile } from '../../model/user-profile';
import { Bookingmodel } from '../../model/bookingmodel';
import { Time } from '@angular/common';

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
  evStationData: EvAdminProfile[];
  session: UserProfile;
  evBookingData: Bookingmodel[];

  citiesapiData: any;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private userservice: UserservicesService
  ) {}

  ngOnInit() {
    this.session = this.auth.getWebUserSession();

    // Make an HTTP GET request to the API
    this.http
      .get('https://mocki.io/v1/79c1cf35-6327-4ffc-9e38-16e5a9fba095')
      .subscribe(
        (data: any) => {
          this.citiesapiData = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }

  onCityChange(event: any): void {
    this.selectedCityName = event.target.value;
    this.selectedCityState = this.getState(this.selectedCityName);
  }

  getState(cityName: string): string {
    const selectedCity = this.citiesapiData.find(
      (city: any) => city.name === cityName
    );
    return selectedCity ? selectedCity.state : '';
  }

  onSearch(city: string, state: string) {
    if (this.session) {
      if (city && state) {
        this.userservice
          .getEvAdminProfileByLocation(city, state)
          .subscribe((data: EvAdminProfile[]) => {
            this.evStationData = data;
            this.checkSlotAvailability();
          });
      } else {
        alert('Select a location.');
      }
    } else {
      alert('Please log in first.');
    }
  }

  checkSlotAvailability() {
    if (
      !this.selectedDate ||
      !this.selectedSlot ||
      !this.selectedTime ||
      !this.evStationData ||
      !this.selectedHours
    ) {
      console.error('Missing required parameters.');
      return;
    }

    const currentDate = new Date();
    const selectedDateTime = new Date(
      this.selectedDate + 'T' + this.selectedTime
    );

    if (selectedDateTime < currentDate) {
      alert('Selected date or time is in the past.');
      console.error('Selected date or time is in the past.');
      return;
    }

    const selectedDay = selectedDateTime.getDay(); // Get day of the week
    const selectedDayOfWeek = this.getDayOfWeek(selectedDay); // Get day of the week in text format

    this.evStationData.forEach((station: EvAdminProfile) => {
      const stationId = station.id;
      const dayTimings = station.evTimings[selectedDayOfWeek];

      if (!dayTimings) {
        console.error(
          `No timing information available for ${stationId} on ${selectedDayOfWeek}.`
        );
        return;
      }

      const openingTime = new Date(dayTimings.openingTime.seconds * 1000);
      const closingTime = new Date(dayTimings.closingTime.seconds * 1000);

      const suggestedSlots: string[] = [];

      let startTime = new Date(openingTime);
      const endTime = new Date(closingTime);

      while (startTime < endTime) {
        const endTimeSlot = new Date(
          startTime.getTime() + parseInt(this.selectedHours) * 60 * 60 * 1000
        );
        const endTimeString = this.formatTime(endTimeSlot);

        suggestedSlots.push(this.formatTime(startTime) + '-' + endTimeString);
        startTime = endTimeSlot;
      }

      console.log(
        'Available slots for station ' + stationId + ':',
        suggestedSlots
      );
    });
  }

  getDayOfWeek(day: number): string {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysOfWeek[day];
  }

  formatTime(time: Date): string {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
  }
}

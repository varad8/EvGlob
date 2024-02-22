import { Component, NgZone, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { UserservicesService } from '../../UserDataService/userservices.service';
import { EvAdminProfile } from '../../model/ev-admin-profile';
import { AuthService } from '../../shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookingmodel } from '../../model/bookingmodel';

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
  userLogged: any;
  selecteddata: EvAdminProfile | undefined;
  openBookingModal: boolean = false;
  stationid: any = '';
  userLoggedStatus: boolean = false;
  station: EvAdminProfile | undefined;
  calculateTotalAmount: number | undefined;
  getSlotData: Bookingmodel[] | undefined;

  //Booking fields
  selectedSlot: string = '';
  selectedDate: string = '';
  selectedTime: string = '';
  selectedDuration: string = '';

  //payment modal
  enteredCardNumber: string = '';
  enteredExp: string = '';
  enteredCvv: number = null;
  isCardNumberValid: boolean = false;
  isMonthYearValid: boolean = false;
  isCVCValid: boolean = false;
  isLoading: boolean = false;
  paymentSuccess: boolean = false;
  isModalOpen: boolean = false;
  warning: string = '';
  warningModal: boolean = false;
  bookingSuccessModalVisible: boolean = false;

  cards: any[] = [
    {
      number: '4141 4141 4141 4141',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 414,
      exp: '12/26',
    },
    {
      number: '4242 4242 4242 4242',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 424,
      exp: '12/26',
    },
    {
      number: '4343 4343 4343 4343',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 434,
      exp: '12/26',
    },
    {
      number: '4444 4444 4444 4444',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 444,
      exp: '12/26',
    },
    {
      number: '4545 4545 4545 4545',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 454,
      exp: '12/26',
    },
    {
      number: '4646 4646 4646 4646',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 464,
      exp: '12/26',
    },
    {
      number: '4747 4747 4747 4747',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 474,
      exp: '12/26',
    },
    {
      number: '4848 4848 4848 4848',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 484,
      exp: '12/26',
    },
    {
      number: '4949 4949 4949 4949',
      image: 'https://cdn-icons-png.flaticon.com/512/196/196578.png',
      cvv: 494,
      exp: '12/26',
    },
    {
      number: '5050 5050 5050 5050',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 505,
      exp: '12/26',
    },

    {
      number: '5050 5050 5050 5050',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 505,
      exp: '12/26',
    },

    {
      number: '5151 5151 5151 5151',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 515,
      exp: '12/26',
    },
    {
      number: '5252 5252 5252 5252',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 525,
      exp: '12/26',
    },
    {
      number: '5353 5353 5353 5353',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 535,
      exp: '12/26',
    },
    {
      number: '5454 5454 5454 5454',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 545,
      exp: '12/26',
    },
    {
      number: '5555 5555 5555 5555',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 555,
      exp: '12/26',
    },
    {
      number: '5656 5656 5656 5656',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 565,
      exp: '12/26',
    },
    {
      number: '5757 5757 5757 5757',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 575,
      exp: '12/26',
    },
    {
      number: '5858 5858 5858 5858',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 585,
      exp: '12/26',
    },
    {
      number: '5959 5959 5959 5959',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 595,
      exp: '12/26',
    },
    {
      number: '6060 6060 6060 6060',
      image: 'https://cdn-icons-png.flaticon.com/512/14062/14062982.png',
      cvv: 606,
      exp: '12/26',
    },
  ];

  countries: any[] = [];
  selectedCountry: any = {};

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 13;

  handler: any = null;

  constructor(
    private route: ActivatedRoute,
    private evdata: UserservicesService,
    private userAuth: AuthService,
    private http: HttpClient,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.userLoggedStatus = this.userAuth.checkUserLoggedIn();
    this.userLogged = this.userAuth.getWebUserSession();
    this.stationid = this.route.snapshot.paramMap.get('stationid');
    this.populateMarkers();

    //Get the query params
    // Retrieve query parameters and log them
    this.route.queryParams.subscribe((params) => {
      const timing = params['timing'];
      const slot = params['slot'];
      const hours = params['hours'];
      const date = params['date'];

      console.log(typeof this.selectedTime);

      this.selectedSlot = slot;
      this.selectedTime = this.timeFormat(timing);
      console.log('Formated Timing:', this.selectedTime);
      this.selectedDate = date;
      this.selectedDuration = hours;

      console.log('Query parameters:', timing, slot, hours, date);
    });

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

    //payment modal
    this.getCountries().subscribe(
      (data: any) => {
        this.countries = data;
      },
      (error: any) => {
        console.error('Error fetching countries:', error);
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
      return;
    }
    this.openBookingModal = true;
    this.selecteddata = stationdata;
  }

  // makePayment(): void {
  //   console.log(this.userLogged);
  //   // Check if a slot is selected and the date is not a previous date
  //   if (
  //     this.selectedSlot &&
  //     this.selectedDate &&
  //     this.selectedTime &&
  //     this.selectedDuration
  //   ) {
  //     //check availability of slots
  //     this.evdata
  //       .getBookingDataByStationIdAndDate(
  //         this.selecteddata.id,
  //         this.selectedDate,
  //         this.selectedSlot
  //       )
  //       .subscribe((data: Bookingmodel[]) => {
  //         this.getSlotData = data;
  //         console.log(this.getSlotData);
  //       });

  //     const currentDateTime = new Date(); // Capture current date and time
  //     const selectedDateTime = new Date(
  //       `${this.selectedDate} ${this.selectedTime}`
  //     );
  //     const selectedDayOfWeek = this.getDayOfWeekBooking(
  //       selectedDateTime.getDay()
  //     );

  //     // Check if the selected day exists in the evTimings object
  //     if (this.selecteddata.evTimings.hasOwnProperty(selectedDayOfWeek)) {
  //       const openingTime =
  //         this.selecteddata.evTimings[selectedDayOfWeek].openingTime;
  //       const closingTime =
  //         this.selecteddata.evTimings[selectedDayOfWeek].closingTime;

  //       // Convert opening and closing times to Date objects for comparison
  //       const openingDateTime = new Date(selectedDateTime);
  //       openingDateTime.setHours(openingTime.hours, openingTime.minutes, 0, 0);

  //       const closingDateTime = new Date(selectedDateTime);
  //       closingDateTime.setHours(closingTime.hours, closingTime.minutes, 0, 0);

  //       // Calculate expected end time based on selected time and duration
  //       const selectedDurationHours = parseInt(this.selectedDuration, 10);
  //       const expectedEndTime = new Date(
  //         selectedDateTime.getTime() + selectedDurationHours * 60 * 60 * 1000
  //       );

  //       // Ensure selected time is not in the past and expected end time is within operating hours
  //       if (
  //         selectedDateTime >= currentDateTime &&
  //         selectedDateTime >= openingDateTime &&
  //         expectedEndTime <= closingDateTime
  //       ) {
  //         console.log('Selected Slot:', this.selectedSlot);
  //         console.log('Selected Date:', this.selectedDate);
  //         console.log('Selected Time:', this.selectedTime);
  //         console.log('Charging Duration:', this.selectedDuration);
  //         console.log('Day of the Week:', selectedDayOfWeek);
  //         console.log('Opening Time:', openingTime);
  //         console.log('Closing Time:', closingTime);

  //         // Display only the time part of the expected end time
  //         console.log(
  //           'Expected End Time:',
  //           `${expectedEndTime.getHours()}:${expectedEndTime.getMinutes()}`
  //         );

  //         const isConfirmed = window.confirm(
  //           'Are you sure you want to book this slot?'
  //         );

  //         if (isConfirmed) {
  //           // User confirmed, proceed with booking logic
  //           this.openPaymentModal();
  //           console.log(
  //             'Booking confirmed. Implement your booking logic here.'
  //           );
  //         } else {
  //           // User canceled
  //           console.log('Booking canceled.');
  //         }
  //       } else {
  //         // Display an alert if the selected time or expected end time is outside the opening and closing times
  //         window.alert(
  //           'Please select a valid time and duration within the opening and closing hours.'
  //         );
  //       }
  //     } else {
  //       // Display an alert if the timings are not available for the selected day
  //       window.alert('Timings not available for the selected day.');
  //     }
  //   } else {
  //     // Display an alert if a slot, date, time, or duration is not selected
  //     window.alert('Please fill in all details before booking.');
  //   }
  // }

  makePayment(): void {
    console.log(this.userLogged);
    // Check if a slot is selected and the date is not a previous date
    if (
      this.selectedSlot &&
      this.selectedDate &&
      this.selectedTime &&
      this.selectedDuration
    ) {
      // Check availability of slots
      this.evdata
        .getBookingDataByStationIdAndDate(
          this.selecteddata.id,
          this.selectedDate,
          this.selectedSlot
        )
        .subscribe((data: Bookingmodel[]) => {
          this.getSlotData = data;
          console.log(this.getSlotData);

          const currentDateTime = new Date(); // Capture current date and time
          const selectedDateTime = new Date(
            `${this.selectedDate} ${this.selectedTime}`
          );
          const selectedDayOfWeek = this.getDayOfWeekBooking(
            selectedDateTime.getDay()
          );

          // Check if the selected day exists in the evTimings object
          if (this.selecteddata.evTimings.hasOwnProperty(selectedDayOfWeek)) {
            const openingTime =
              this.selecteddata.evTimings[selectedDayOfWeek].openingTime;
            const closingTime =
              this.selecteddata.evTimings[selectedDayOfWeek].closingTime;

            // Convert opening and closing times to Date objects for comparison
            const openingDateTime = new Date(selectedDateTime);
            openingDateTime.setHours(
              openingTime.hours,
              openingTime.minutes,
              0,
              0
            );

            const closingDateTime = new Date(selectedDateTime);
            closingDateTime.setHours(
              closingTime.hours,
              closingTime.minutes,
              0,
              0
            );

            // Calculate expected end time based on selected time and duration
            const selectedDurationHours = parseInt(this.selectedDuration, 10);
            const expectedEndTime = new Date(
              selectedDateTime.getTime() +
                selectedDurationHours * 60 * 60 * 1000
            );

            // Ensure selected time is not in the past and expected end time is within operating hours
            if (
              selectedDateTime >= currentDateTime &&
              selectedDateTime >= openingDateTime &&
              expectedEndTime <= closingDateTime
            ) {
              // Check if the slot is available
              const isSlotAvailable = !this.getSlotData.some((booking) => {
                const bookingStart = new Date(
                  `${booking.bookedForDate}T${booking.timeForBooked}`
                );
                const bookingEnd = new Date(
                  bookingStart.getTime() +
                    parseInt(booking.totalHoursEvBooking, 10) * 60 * 60 * 1000
                );

                // Check if the selected slot overlaps with any existing booking
                const slotStart = selectedDateTime;
                const slotEnd = expectedEndTime;

                if (
                  (slotStart >= bookingStart && slotStart < bookingEnd) ||
                  (slotEnd > bookingStart && slotEnd <= bookingEnd) ||
                  (slotStart <= bookingStart && slotEnd >= bookingEnd)
                ) {
                  // There is an overlap, the slot is not available
                  const bookingStartTime = `${bookingStart.getHours()}:${bookingStart.getMinutes()}`;
                  const bookingEndTime = `${bookingEnd.getHours()}:${bookingEnd.getMinutes()}`;
                  this.warning = `Slot is already booked from ${bookingStartTime} to ${bookingEndTime}. Please choose another slot time.`;
                  this.warningModal = true;
                  return true;
                }
                return false;
              });

              if (isSlotAvailable) {
                console.log('Selected Slot:', this.selectedSlot);
                console.log('Selected Date:', this.selectedDate);
                console.log('Selected Time:', this.selectedTime);
                console.log('Charging Duration:', this.selectedDuration);
                console.log('Day of the Week:', selectedDayOfWeek);
                console.log('Opening Time:', openingTime);
                console.log('Closing Time:', closingTime);

                // Display only the time part of the expected end time
                console.log(
                  'Expected End Time:',
                  `${expectedEndTime.getHours()}:${expectedEndTime.getMinutes()}`
                );

                const isConfirmed = window.confirm(
                  'Are you sure you want to book this slot?'
                );

                if (isConfirmed) {
                  // User confirmed, proceed with booking logic

                  this.openPaymentModal();

                  console.log(
                    'Booking confirmed. Implement your booking logic here.'
                  );
                } else {
                  // User canceled
                  console.log('Booking canceled.');
                }
              }
            } else {
              // Display an alert if the selected time or expected end time is outside the opening and closing times
              this.warning =
                'Please select a valid time and duration within the opening and closing hours.';
              this.warningModal = true;
            }
          } else {
            // Display an alert if the timings are not available for the selected day
            this.warning = 'Timings not available for the selected day.';
            this.warningModal = true;
          }
        });
    } else {
      // Display an alert if a slot, date, time, or duration is not selected
      this.warning = 'Please fill in all details before booking.';
      this.warningModal = true;
    }
  }

  closeModal() {
    this.selectedDate = '';
    this.selectedDuration = '';
    this.selectedSlot = '';
    this.selectedTime = '';
    this.openBookingModal = false;
  }

  // Helper function to get the day of the week name
  getDayOfWeekBooking(dayIndex: number): string {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysOfWeek[dayIndex];
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

  //Payment Modal

  getCountries(): Observable<any[]> {
    const apiUrl = 'https://mocki.io/v1/db2533fd-fc54-4a1d-a4ba-542b83a6c0d3';
    return this.http.get<any[]>(apiUrl);
  }

  onCountrySelected(event: Event): void {
    const countryCode = (event.target as HTMLSelectElement).value;
    this.selectedCountry =
      this.countries.find((country) => country.code === countryCode) || {};
  }

  getCardImage(): string {
    const matchedCard = this.cards.find(
      (card) =>
        card.number.replace(/\s/g, '') ===
        this.enteredCardNumber.replace(/\s/g, '')
    );

    return matchedCard ? matchedCard.image : '../../../assets/cardgrey.png';
  }

  onCardNumberInput(): void {
    this.enteredCardNumber = this.enteredCardNumber.replace(/\D/g, '');

    this.enteredCvv = null;
    this.enteredExp = '';
    this.isCVCValid = false;
    this.isMonthYearValid = false;

    // Add space after every 4 digits
    this.enteredCardNumber = this.enteredCardNumber.replace(/(\d{4})/g, '$1 ');

    // Trim any extra spaces at the end
    this.enteredCardNumber = this.enteredCardNumber.trim();

    // Limit the length to 19 characters (16 digits + 3 spaces)
    if (this.enteredCardNumber.length > 19) {
      this.enteredCardNumber = this.enteredCardNumber.slice(0, 19);
    }

    // Validate the card number
    this.isCardNumberValid = this.validateCardNumber(this.enteredCardNumber);
  }

  validateCardNumber(cardNumber: string): boolean {
    return this.cards.some(
      (card) => card.number.replace(/\s/g, '') === cardNumber.replace(/\s/g, '')
    );
  }

  onMonthYearInput(event: Event): void {
    // Get the input value
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove non-digit characters
    value = value.replace(/\D/g, '');

    // Add a slash between MM and YY if not already there
    if (value.length > 2 && value.indexOf('/') === -1) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }

    // Set the formatted value back to the input
    input.value = value;

    // Update the ngModel property
    this.enteredExp = value;
    this.isMonthYearValid = this.validateExpiry(this.enteredExp);
  }

  validateExpiry(enteredExp: string): boolean {
    return this.cards.some((card) => {
      return (
        card.number.replace(/\s/g, '') ===
          this.enteredCardNumber.replace(/\s/g, '') && card.exp === enteredExp
      );
    });
  }

  OnCvvInput(): void {
    this.isCVCValid = this.validateCvv(this.enteredCvv);
    console.log(this.isCVCValid);
  }

  validateCvv(enteredCvv: number): boolean {
    return this.cards.some((card) => {
      return (
        card.number.replace(/\s/g, '') ===
          this.enteredCardNumber.replace(/\s/g, '') && card.cvv === enteredCvv
      );
    });
  }

  payAmount(): void {
    this.zone.run(() => {
      this.isLoading = true;
      // Hide Pay and amount content

      setTimeout(() => {
        this.isLoading = false;
        this.paymentSuccess = true;

        if (this.paymentSuccess) {
          const bookingData: Bookingmodel = {
            userId: this.userLogged.id,
            evid: this.selecteddata.evid,
            stationId: this.selecteddata.id,
            bookingSlot: this.selectedSlot,
            timeForBooked: this.selectedTime,
            totalHoursEvBooking: this.selectedDuration,
            bookedForDate: this.selectedDate,
            currentTimestamp: Date.now(),
            totalPayable: this.calculateTotalAmount,
            bookingStatus: 'booked',
            remark: 'booked',
            visitingStatus: 'not visited',
            visitingTimeStamp: 0,
            paymentDetails: {
              transactionid: this.generateTransactionId(),
              paymentType: 'card',
              paymentStatus: true,
              amount: this.calculateTotalAmount,
              cardno: this.enteredCardNumber,
              createdDate: Date.now(),
            },
            bookingRefId: '',
          };
          this.isModalOpen = false;
          this.openBookingModal = false;

          const bookingWithEmail = {
            ...bookingData,
            email: this.userLogged.email,
          };

          //Generate Invoice when payment success
          this.http
            .post(
              'http://127.0.0.1:3000/send-booking-email',
              bookingWithEmail,
              { responseType: 'text' }
            )
            .subscribe(
              (response) => {
                console.log('Response:', response);
                // Check if the response contains the success message
                if (response.includes('Email sent successfully')) {
                  // Handle success
                } else {
                  // Handle unexpected response
                }
              },
              (error) => {
                console.error('Error sending email:', error);
                // Handle error
              }
            );

          // Call the saveBookingData method to save the booking data to Firestore
          this.evdata
            .saveBookingData(bookingData)
            .then((res) => {
              this.showBookingSuccessModal();
            })
            .catch((error) => {
              alert('Error saving booking data: ' + error);
            });
        }
      }, 2000);
    });
  }

  closePaymentModal() {
    this.enteredCvv = null;
    this.enteredCardNumber = null;
    this.enteredExp = null;
    this.isModalOpen = false;
  }
  openPaymentModal() {
    this.openBookingModal = false;
    this.calculateTotalAmount = this.getTotalAmount();
    this.isModalOpen = true;
  }

  generateTransactionId(): number {
    // Generate a random number within a specific range
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getTotalAmount(): number {
    // Convert selectedDuration to a number using parseInt or parseFloat
    const durationNumeric = parseInt(this.selectedDuration); // Use parseFloat if you expect floating-point values
    // Check if durationNumeric is a valid number
    if (isNaN(durationNumeric)) {
      // Handle the case where selectedDuration is not a valid number
      console.error('Invalid selectedDuration:', this.selectedDuration);
      return 0; // or any default value you prefer
    }
    // Perform the arithmetic operation
    return this.selecteddata.rate * durationNumeric;
  }

  // Function to format time to HH:mm format
  private timeFormat(timeString: string): string {
    // Split the time string into hours, minutes, and AM/PM
    const timeParts = timeString.split(':');
    let hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1].split(' ')[0], 10);
    const period = timeParts[1].split(' ')[1];

    // Adjust hours based on AM/PM
    if (period === 'AM' && hours === 12) {
      hours = 0;
    } else if (period === 'PM' && hours < 12) {
      hours += 12;
    }

    // Format hours and minutes to HH:mm format
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    // Return formatted time
    return `${formattedHours}:${formattedMinutes}`;
  }

  cloaseWarnigModal() {
    this.warningModal = false;
    this.warning = '';
  }

  // Method to close the booking success modal
  closeBookingSuccessModal() {
    this.bookingSuccessModalVisible = false;
  }

  // Method to show the booking success modal
  showBookingSuccessModal() {
    this.bookingSuccessModalVisible = true;
  }
}

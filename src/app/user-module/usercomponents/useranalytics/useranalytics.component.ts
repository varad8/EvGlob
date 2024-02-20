import { Component } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { UserservicesService } from '../../../UserDataService/userservices.service';
import { Bookingmodel } from '../../../model/bookingmodel';
import { UserProfile } from '../../../model/user-profile';

@Component({
  selector: 'app-useranalytics',
  templateUrl: './useranalytics.component.html',
  styleUrl: './useranalytics.component.css',
})
export class UseranalyticsComponent {
  bookings: Bookingmodel[];
  session: UserProfile;
  todaysBookingsCount: number = 0;
  totalBookingsCount: number = 0;
  visitedUsersCount: number = 0;
  notVisitedUsersCount: number = 0;
  constructor(
    private auth: AuthService,
    private userservice: UserservicesService
  ) {}

  ngOnInit(): void {
    this.session = this.auth.getWebUserSession();
    this.getBookings(this.session.id);
  }

  async getBookings(userid: string): Promise<void> {
    this.userservice
      .getBookingDataByUserId(userid)
      .subscribe(async (bookings) => {
        this.bookings = bookings;
        this.populateChart();
        this.populateBookingCountChart();
        this.calculateAnalytics();
      });
  }

  calculateAnalytics(): void {
    if (this.bookings) {
      // Calculate today's bookings count
      const today = new Date().toDateString();
      this.todaysBookingsCount = this.bookings.filter(
        (booking) => new Date(booking.bookedForDate).toDateString() === today
      ).length;

      // Calculate total bookings count
      this.totalBookingsCount = this.bookings.length;

      // Calculate visited users count
      this.visitedUsersCount = this.bookings.filter(
        (booking) => booking.visitingStatus === 'visited'
      ).length;

      // Calculate not visited users count
      this.notVisitedUsersCount = this.bookings.filter(
        (booking) => booking.visitingStatus !== 'visited'
      ).length;
    }
  }

  chartData: any[] = [];
  chartLabels: string[] = [];
  chartColors: any[] = [];

  chartDataa: any[] = [];
  chartLabelss: string[] = [];
  chartColorss: any[] = [];

  populateChart() {
    // Initialize object to store aggregated totals for that  station, month, and year
    const stationMonthYearTotals: { [key: string]: number } = {};

    this.bookings.forEach((booking) => {
      const date = new Date(booking.bookedForDate);
      const month = date.getMonth() + 1; // Months in JavaScript are 0-indexed
      const year = date.getFullYear().toString();
      const stationId = booking.stationId;

      // Create a unique key combining stationId, month, and year
      const key = `${stationId}_${year}_${month}`;

      // Update or initialize totalPayable for this combination
      if (!stationMonthYearTotals[key]) {
        stationMonthYearTotals[key] = 0;
      }
      stationMonthYearTotals[key] += booking.totalPayable;
    });

    // Extract data for chart labels and series
    const chartData: any[] = [];
    const chartLabels: string[] = [];
    const chartColors: string[] = [];

    // Group bookings by station ID
    const groupedBookings: { [key: string]: Bookingmodel[] } = {};
    this.bookings.forEach((booking) => {
      if (!groupedBookings[booking.stationId]) {
        groupedBookings[booking.stationId] = [];
      }
      groupedBookings[booking.stationId].push(booking);
    });

    // Generate colors for each station ID
    const stationColors: { [key: string]: string } = {};
    Object.keys(groupedBookings).forEach((stationId, index) => {
      stationColors[stationId] = this.getRandomColor();
    });

    // Iterate over station-month-year totals and populate chart data and labels
    Object.keys(stationMonthYearTotals).forEach((key) => {
      const [stationId, year, month] = key.split('_');
      const totalPayable = stationMonthYearTotals[key];

      // Format month and year for the label
      const monthYearLabel = `${this.getMonthName(
        parseInt(month)
      )} ${year} - Station ID: ${stationId}`;

      // Dynamically calculate the height based on the total payable amount
      const height = totalPayable * 0.1; // You can adjust the scaling factor as needed

      // Push data to chart arrays
      chartData.push({ y: totalPayable, height: height });
      chartLabels.push(monthYearLabel);
      chartColors.push(stationColors[stationId]);
    });

    // Update chart data, labels, and colors
    this.chartData = [{ data: chartData, label: 'Total Payable' }];
    this.chartLabels = chartLabels;
    this.chartColors = [{ backgroundColor: chartColors }];
  }

  // Function to generate a random color
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to generate random colors
  generateColors(numColors: number): string[] {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.7)`;
      colors.push(color);
    }
    return colors;
  }

  // Function to get month name
  getMonthName(monthNumber: number): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthNumber - 1];
  }

  populateBookingCountChart() {
    const stationMonthYearCounts: { [key: string]: number } = {};

    // Calculate booking count per month for each station
    this.bookings.forEach((booking) => {
      const date = new Date(booking.bookedForDate);
      const month = date.getMonth() + 1; // Months in JavaScript are 0-indexed
      const year = date.getFullYear().toString();
      const stationId = booking.stationId;

      // Create a unique key combining stationId, month, and year
      const key = `${stationId}_${year}_${month}`;

      // Update or initialize booking count for this combination
      if (!stationMonthYearCounts[key]) {
        stationMonthYearCounts[key] = 0;
      }
      stationMonthYearCounts[key]++;
    });

    // Extract data for chart labels and series
    const chartData: any[] = [];
    const chartLabels: string[] = [];
    const chartColors: string[] = [];

    // Group bookings by station ID
    const groupedBookings: { [key: string]: Bookingmodel[] } = {};
    this.bookings.forEach((booking) => {
      if (!groupedBookings[booking.stationId]) {
        groupedBookings[booking.stationId] = [];
      }
      groupedBookings[booking.stationId].push(booking);
    });

    // Generate colors for each station ID
    const stationColors: { [key: string]: string } = {};
    Object.keys(groupedBookings).forEach((stationId, index) => {
      stationColors[stationId] = this.getRandomColor();
    });

    // Iterate over station-month-year counts and populate chart data and labels
    Object.keys(stationMonthYearCounts).forEach((key) => {
      const [stationId, year, month] = key.split('_');
      const count = stationMonthYearCounts[key];

      // Format month and year for the label
      const monthYearLabel = `${this.getMonthName(
        parseInt(month)
      )} ${year} - Station ID: ${stationId}`;

      // Push data to chart arrays
      chartData.push(count);
      chartLabels.push(monthYearLabel);
      chartColors.push(stationColors[stationId]);
    });

    // Update chart data, labels, and colors
    this.chartDataa = [{ data: chartData, label: 'Booking Count' }];
    this.chartLabelss = chartLabels;
    this.chartColorss = [{ backgroundColor: chartColors }];
  }
}

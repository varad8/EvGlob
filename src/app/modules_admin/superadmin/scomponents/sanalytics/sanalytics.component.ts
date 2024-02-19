import { Component } from '@angular/core';
import { AdminserviceService } from '../../../../EvDataService/adminservice.service';
import { EvAdminProfile } from '../../../../model/ev-admin-profile';
import { AuthService } from '../../../../shared/auth.service';
import { Bookingmodel } from '../../../../model/bookingmodel';
import {
  Chart,
  ChartConfiguration,
  ChartDataset,
  ChartOptions,
} from 'chart.js';

@Component({
  selector: 'app-sanalytics',
  templateUrl: './sanalytics.component.html',
  styleUrl: './sanalytics.component.css',
})
export class SanalyticsComponent {
  inactiveAccountsCount: number = 0;
  activeAccountsCount: number = 0;
  userregisteredCount: number = 0;
  inactiveProfiles: EvAdminProfile[] = [];
  activeProfiles: EvAdminProfile[] = [];
  bookings: Bookingmodel[] = [];

  constructor(
    private adminService: AdminserviceService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getInactiveAccountsCount();
    this.getUserregisteredCount();
    this.getAllInActiveProfiles();
    this.getActiveAccountsCount();
    this.getAllActiveProfiles();
    this.populateChart();
    this.populateBookingCountChart();
  }

  getInactiveAccountsCount(): void {
    this.adminService.getCountOfInactiveAccounts().subscribe(
      (count) => {
        this.inactiveAccountsCount = count;
      },
      (error) => {
        console.error('Error getting inactive accounts count:', error);
      }
    );
  }

  getActiveAccountsCount(): void {
    this.adminService.getCountOfActiveAccounts().subscribe(
      (count) => {
        this.activeAccountsCount = count;
      },
      (error) => {
        console.error('Error getting inactive accounts count:', error);
      }
    );
  }

  getUserregisteredCount(): void {
    this.adminService.getCountOfUserProfiles().subscribe(
      (count) => {
        this.userregisteredCount = count;
      },
      (error) => {
        console.error('Error getting user accounts count:', error);
      }
    );
  }

  getAllInActiveProfiles(): void {
    this.adminService.getAllInactiveProfiles().subscribe(
      (profiles) => {
        this.inactiveProfiles = profiles;
      },
      (error) => {
        console.error('Error getting inactive profiles:', error);
      }
    );
  }

  getAllActiveProfiles(): void {
    this.adminService.getAllactiveProfiles().subscribe(
      (profiles) => {
        this.activeProfiles = profiles;
      },
      (error) => {
        console.error('Error getting inactive profiles:', error);
      }
    );
  }

  approveProfile(profiledata: EvAdminProfile): void {
    const sessionUser = this.auth.getAdminSession();
    const ap = sessionUser.firstName + ' ' + sessionUser.lastName;
    this.adminService
      .approveProfile(
        profiledata.id,
        sessionUser.adminId,
        ap,
        'Approved',
        'ACTIVE'
      )
      .then(() => {
        console.log('Profile approved successfully.');
        // Optionally, you can update the list of inactive profiles here or perform any other action.
      })
      .catch((error) => {
        console.error('Error approving profile:', error);
      });
  }

  disapproveProfile(profiledata: EvAdminProfile): void {
    const sessionUser = this.auth.getAdminSession();
    const ap = sessionUser.firstName + ' ' + sessionUser.lastName;
    this.adminService
      .approveProfile(
        profiledata.id,
        sessionUser.adminId,
        ap,
        'Disapproved by owner',
        'INACTIVE'
      )
      .then(() => {
        console.log('Profile disapproved successfully.');
        // Optionally, you can update the list of inactive profiles here or perform any other action.
      })
      .catch((error) => {
        console.error('Error disapproving profile:', error);
      });
  }

  chartData: any[] = [];
  chartLabels: string[] = [];
  chartColors: any[] = [];
  chartOptions = {
    responsive: true,
  };

  chartDataa: any[] = [];
  chartLabelss: string[] = [];
  chartColorss: any[] = [];
  maxValue: number;

  populateChart() {
    // Fetch data and update chart options here
    this.adminService.getAllBookings().subscribe((bookings: Bookingmodel[]) => {
      console.log('Fetched bookings:', bookings); // Log fetched bookings to console

      // Initialize object to store aggregated totals for each station, month, and year
      const stationMonthYearTotals: { [key: string]: number } = {};

      // Calculate total amount paid per month for each station
      bookings.forEach((booking) => {
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
      bookings.forEach((booking) => {
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

      console.log(this.chartData);
      console.log(this.chartLabels);
    });
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
    this.adminService.getAllBookings().subscribe((bookings: Bookingmodel[]) => {
      console.log('Fetched bookings:', bookings); // Log fetched bookings to console

      // Initialize object to store booking counts for each station, month, and year
      const stationMonthYearCounts: { [key: string]: number } = {};

      // Calculate booking count per month for each station
      bookings.forEach((booking) => {
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
      bookings.forEach((booking) => {
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

      console.log(this.chartDataa);
      console.log(this.chartLabelss);
    });
  }
}

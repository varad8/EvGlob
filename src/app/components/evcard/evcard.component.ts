import { Component } from '@angular/core';
import { UserservicesService } from '../../UserDataService/userservices.service';
import { EvAdminProfile } from '../../model/ev-admin-profile';

@Component({
  selector: 'app-evcard',
  templateUrl: './evcard.component.html',
  styleUrl: './evcard.component.css',
})
export class EvcardComponent {
  constructor(private userdata: UserservicesService) {}
  station: EvAdminProfile[] = []; // Define the type as EvAdminProfile[]

  pageSize = 4; // Number of stations to display per page
  currentPage = 1; // Current page
  activeIndex = -1; // Index of the active card

  ngOnInit(): void {
    // Call the method to fetch EV admin profiles
    this.userdata.getEvAdminProfiles().subscribe(
      (profiles: EvAdminProfile[]) => {
        this.station = profiles; // Assign fetched profiles to the station array
      },
      (error) => {
        console.error('Error fetching EV admin profiles:', error);
      }
    );
  }

  get visiblestation() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.station.slice(startIndex, endIndex);
  }

  totalPages(): number {
    return Math.ceil(this.station.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getEvTiming(event: {
    evTimings: { [key: string]: { openingTime: string; closingTime: string } };
  }): string {
    const day = Object.keys(event.evTimings).find(
      (key) => event.evTimings[key].openingTime !== ''
    );
    if (!day) {
      return 'Closed all week';
    }
    const { openingTime, closingTime } = event.evTimings[day];
    return `${day}: ${openingTime} - ${closingTime}`;
  }
}

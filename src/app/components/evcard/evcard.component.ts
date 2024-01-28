import { Component } from '@angular/core';

@Component({
  selector: 'app-evcard',
  templateUrl: './evcard.component.html',
  styleUrl: './evcard.component.css',
})
export class EvcardComponent {
  station = [
    {
      evid: 1,
      title: 'Event 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '16.994444', longitude: '73.300003' },
      rate: 4.5,
      evTimings: {
        Monday: { openingTime: '09:00 AM', closingTime: '05:00 PM' },
        Tuesday: { openingTime: '09:00 AM', closingTime: '05:00 PM' },
        Wednesday: { openingTime: '09:00 AM', closingTime: '05:00 PM' },
        Thursday: { openingTime: '09:00 AM', closingTime: '05:00 PM' },
        Friday: { openingTime: '09:00 AM', closingTime: '05:00 PM' },
        Saturday: { openingTime: '09:00 AM', closingTime: '05:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/1/',
    },
    {
      evid: 2,
      title: 'Event 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '16.994444', longitude: '73.300003' },
      rate: 4.2,
      evTimings: {
        Monday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Tuesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Wednesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Thursday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Friday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Saturday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/2/',
    },
    {
      evid: 3,
      title: 'Event 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '16.994444', longitude: '73.300003' },
      rate: 4.2,
      evTimings: {
        Monday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Tuesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Wednesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Thursday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Friday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Saturday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/2/',
    },
    {
      evid: 4,
      title: 'Event 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '19.076090', longitude: '72.877426' },
      rate: 4.2,
      evTimings: {
        Monday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Tuesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Wednesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Thursday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Friday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Saturday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/2/',
    },
    {
      evid: 5,
      title: 'Event 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '19.076090', longitude: '72.877426' },
      rate: 4.2,
      evTimings: {
        Monday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Tuesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Wednesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Thursday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Friday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Saturday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/2/',
    },
    {
      evid: 6,
      title: 'Event 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '19.076090', longitude: '72.877426' },
      rate: 4.2,
      evTimings: {
        Monday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Tuesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Wednesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Thursday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Friday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Saturday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/2/',
    },
    {
      evid: 7,
      title: 'Event 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '19.076090', longitude: '72.877426' },
      rate: 4.2,
      evTimings: {
        Monday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Tuesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Wednesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Thursday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Friday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Saturday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/2/',
    },
    {
      evid: 8,
      title: 'Event 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '28.679079', longitude: '77.069710' },
      rate: 4.2,
      evTimings: {
        Monday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Tuesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Wednesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Thursday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Friday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Saturday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/2/',
    },
    {
      evid: 9,
      title: 'Event 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: { latitude: '28.679079', longitude: '77.069710' },
      rate: 4.2,
      evTimings: {
        Monday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Tuesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Wednesday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Thursday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Friday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Saturday: { openingTime: '10:00 AM', closingTime: '06:00 PM' },
        Sunday: { openingTime: '', closingTime: '' },
      },
      imageUrl: 'https://lorempixel.com/400/200/sports/2/',
    },
    // Add 3 more station similarly
  ];
  pageSize = 4; // Number of station to display per page
  currentPage = 1; // Current page
  activeIndex = -1; // Index of the active card

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

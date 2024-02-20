import { Component } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { UserservicesService } from '../../../UserDataService/userservices.service';
import { Ratingmodel } from '../../../model/ratingmodel';
import { UserProfile } from '../../../model/user-profile';

@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrls: ['./userfeedback.component.css'],
})
export class UserfeedbackComponent {
  ratingData: Ratingmodel[] = [];
  session: UserProfile;
  filterRatings: Ratingmodel[] = [];
  searchTerm: string = '';
  showModal: boolean = false;
  feedbackMsg: string = '';
  selectedRating: Ratingmodel;

  constructor(
    private auth: AuthService,
    private userservice: UserservicesService
  ) {}

  ngOnInit() {
    this.session = this.auth.getWebUserSession();

    this.userservice.getRatingsByUserId(this.session.id).subscribe(
      (ratings: Ratingmodel[]) => {
        this.ratingData = ratings;
        this.filterRatings = ratings; // Initialize filterRatings with all ratings
      },
      (error) => {
        console.error('Error fetching ratings:', error);
      }
    );
  }

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    // Filter ratings based on selected option
    if (selectedValue === 'all') {
      this.filterRatings = this.ratingData;
    } else if (selectedValue === 'highest') {
      this.filterRatings = this.ratingData.filter(
        (rating) => rating.rating >= 4
      );
    } else if (selectedValue === 'lowest') {
      this.filterRatings = this.ratingData.filter(
        (rating) => rating.rating <= 3
      );
    }
  }

  filterRating(): void {
    // Filter ratings based on search term
    this.filterRatings = this.ratingData.filter((rating) =>
      rating.stationId.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Function to toggle the modal visibility
  toggleModal(ratingdata: Ratingmodel) {
    this.selectedRating = ratingdata;
    this.showModal = !this.showModal;

    // Call the method to get rating data for the selected booking

    this.userservice
      .getRatingByUserIdAndStationId(
        this.selectedRating.userId,
        this.selectedRating.stationId
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
    this.selectedRating = undefined;
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

  rateNow(ratingsdata: Ratingmodel): void {
    // Create a Ratingmodel object with the necessary data
    const ratingData: Ratingmodel = {
      docid: '',
      stationId: ratingsdata.stationId,
      userId: ratingsdata.userId,
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
        this.selectedRating = undefined;
        this.showModal = false;
        alert('Rating saved successfully!');
      })
      .catch((error) => {
        alert('Error saving rating: ' + error);
      });
  }
}

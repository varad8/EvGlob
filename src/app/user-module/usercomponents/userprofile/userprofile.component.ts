import { Component } from '@angular/core';
import { UserProfile } from '../../../model/user-profile';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css',
})
export class UserprofileComponent {
  userProfile: UserProfile | undefined;
  constructor(private auth: AuthService) {}
  ngOnInit() {
    // Fetch EvAdminProfile data
    // Check if there is an existing session with the evadmin accountType
    const sessionUser = this.auth.getWebUserSession();
    if (sessionUser?.accountType === 'user') {
      this.auth.getUserProfileUsingID(sessionUser.userid).then((Profile) => {
        if (Profile) {
          this.userProfile = Profile;
        }
      });
    } else {
      console.error('User not logged in');
    }
  }
}

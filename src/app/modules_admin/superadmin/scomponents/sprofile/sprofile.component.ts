import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/auth.service';
import { AdminProfileModel } from '../../../../model/admin-profile-model';

@Component({
  selector: 'app-sprofile',
  templateUrl: './sprofile.component.html',
  styleUrl: './sprofile.component.css',
})
export class SprofileComponent {
  adminProfile: AdminProfileModel | undefined;
  constructor(private auth: AuthService) {}
  ngOnInit() {
    // Fetch EvAdminProfile data
    // Check if there is an existing session with the evadmin accountType
    const sessionUser = this.auth.getAdminSession();
    if (
      (sessionUser && sessionUser.accountType === 'superadmin') ||
      sessionUser?.accountType === 'admin'
    ) {
      this.auth.getAdminProfileUsingID(sessionUser.adminId).then((Profile) => {
        if (Profile) {
          this.adminProfile = Profile;
        }
      });
    } else {
      console.error('User not logged in');
    }
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EvAdminProfile } from './../model/ev-admin-profile';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Time } from '@angular/common';
import { Observable, map } from 'rxjs';
import { AdminProfileModel } from '../model/admin-profile-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
    private sst: SessionStorageService
  ) {}

  /*******************************************************[Ev Station Admin]***********************************************************/

  //login method for evadmin
  // evadminlogin(email: string, password: string) {
  //   this.fireauth.signInWithEmailAndPassword(email, password).then(
  //     () => {
  //       localStorage.setItem('token', 'true');
  //       this.router.navigate(['admin/dashboard']);
  //     },
  //     (err) => {
  //       alert('Somethin Went Wrong');
  //       this.router.navigate(['login/evadmin']);
  //     }
  //   );
  // }

  evadminlogin(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (authResult) => {
        const uid = authResult.user?.uid || '';

        // Check if the user with this UID exists in the Firestore collection
        const userRef = this.afs.collection('/Evstation', (ref) =>
          ref.where('userid', '==', uid)
        );

        userRef
          .get()
          .toPromise()
          .then((snapshot) => {
            if (snapshot && !snapshot.empty) {
              // User found, check the accountType
              const user = snapshot.docs[0].data() as EvAdminProfile;
              if (user.accountType === 'evadmin') {
                // Save user information in session storage
                this.sst.store('user', user);

                // Navigate to the dashboard
                this.router.navigate(['admin/dashboard']);
              } else {
                alert('Unauthorized access. Only evadmin allowed.');
              }
            } else {
              alert('User profile not found.');
            }
          })
          .catch((err) => {
            console.error('Error checking user profile:', err);
            alert('Something went wrong.');
            this.router.navigate(['login/evadmin']);
          });
      },
      (err) => {
        alert('Something Went Wrong');
        this.router.navigate(['login/evadmin']);
      }
    );
  }

  //Register method for evregister
  evadminregister(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (authResult) => {
        // Create a new EvAdminProfile instance
        const uid = authResult.user?.uid || '';

        // Define the opening and closing times as Time default
        const openingTime: Time = { hours: 10, minutes: 0 }; // 10:00 AM
        const closingTime: Time = { hours: 19, minutes: 0 }; // 7:00 PM

        const evProfile: EvAdminProfile = {
          id: '',
          evid: '',
          title: '',
          description: '',
          location: { city: '', state: '' },
          coordinates: { latitude: '', longitude: '' },
          address: '',
          rate: 0,
          evTimings: {
            Monday: {
              openingTime: openingTime,
              closingTime: closingTime,
            },
            Tuesday: {
              openingTime: openingTime,
              closingTime: closingTime,
            },
            Wednesday: {
              openingTime: openingTime,
              closingTime: closingTime,
            },
            Thursday: {
              openingTime: openingTime,
              closingTime: closingTime,
            },
            Friday: {
              openingTime: openingTime,
              closingTime: closingTime,
            },
            Saturday: {
              openingTime: openingTime,
              closingTime: closingTime,
            },
            Sunday: {
              openingTime: openingTime,
              closingTime: closingTime,
            },
          },
          imageUrl: '',
          profile: {
            firstname: '',
            lastname: '',
            dob: '',
            mobile: '',
            email: email, // Set email from the registration
            dateofjoining: new Date().toISOString(),
            profilepic: '',
          },
          updatedAt: '',
          accountType: 'evadmin', // Set accountType to 'evadmin'
          userid: uid, // Set the UID
          accountStatus: {
            approvedBy: '',
            updatedAt: '',
            adminID: '',
            status: 'INACTIVE',
            remark: '',
          },
        };

        // Call the method to add the new EvAdminProfile to Firestore
        this.addNewEvProfile(evProfile);

        alert('Registration Successful');

        // Navigate to the login page
        this.router.navigate(['login/evadmin']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['register/evadmin']);
      }
    );
  }

  // New Registering Add data as blank
  addNewEvProfile(evprofile: EvAdminProfile) {
    evprofile.id = this.afs.createId();
    evprofile.evid = this.generateCustomId();
    // Set email and accountType in the profile
    evprofile.profile.email = evprofile.profile.email || '';
    evprofile.accountType = 'evadmin';

    // Use the evid as the document ID when adding to Firestore
    return this.afs.collection('/Evstation').doc(evprofile.id).set(evprofile);
  }

  // Function to generate a custom ID
  private generateCustomId(): string {
    return `EV-${Math.floor(1000 + Math.random() * 90000)}`;
  }

  //check that user is already logged in
  checkExistingSession(): void {
    // Check if there is an existing session with the evadmin accountType
    const existingSessionUser = this.sst.retrieve('user') as EvAdminProfile;

    if (existingSessionUser && existingSessionUser.accountType === 'evadmin') {
      // Redirect to dashboard since a valid session is already present
      this.router.navigate(['admin/dashboard']);
    } else {
      this.router.navigate(['login/evadmin']);
    }
  }

  //get current userid from session storage
  getCurrentUserFromSession(): string | undefined {
    // Check if there is an existing session with the evadmin accountType
    const existingSessionUser = this.sst.retrieve('user') as EvAdminProfile;

    if (existingSessionUser && existingSessionUser.accountType === 'evadmin') {
      return existingSessionUser.userid;
    } else {
      // Handle the case where the user is not logged in or the account type is not 'evadmin'
      return undefined;
    }
  }

  //for authguard evadmin
  checkEvAdminLoggedIn(): boolean {
    // Check if there is an existing session with the evadmin accountType
    const existingSessionUser = this.sst.retrieve('user') as EvAdminProfile;

    // Return true if there is an existing session with evadmin accountType, otherwise return false
    return !!(
      existingSessionUser && existingSessionUser.accountType === 'evadmin'
    );
  }

  //signout
  logOutEvAdmin() {
    this.fireauth.signOut().then(() => {
      // Clear the session storage
      this.sst.clear();

      // Redirect to the login page
      this.router.navigate(['login/evadmin']);
    });
  }

  //getSession that
  getSession(): EvAdminProfile | undefined {
    // Retrieve the user profile from session storage
    const sessionUser = this.sst.retrieve('user') as EvAdminProfile;

    // Check if the user is logged in and has the correct account type
    if (sessionUser && sessionUser.accountType === 'evadmin') {
      return sessionUser;
    } else {
      // Handle the case where the user is not logged in or has the wrong account type
      return undefined;
    }
  }

  // Method to get EvAdminProfile data by userid
  getEvAdminProfileByUserId(
    userid: string
  ): Observable<EvAdminProfile | undefined> {
    return this.afs
      .collection('/Evstation', (ref) => ref.where('userid', '==', userid))
      .valueChanges({ idField: 'id' })
      .pipe(
        map((profiles: any[]) => {
          if (profiles.length > 0) {
            const profileData = profiles[0] as EvAdminProfile; // Cast to EvAdminProfile
            const updatedProfile = {
              ...profileData,
              id: profileData.id,
              updatedAt: new Date().toISOString(),
            }; // Include 'id' and 'updatedAt' in the result
            return updatedProfile;
          } else {
            return undefined;
          }
        })
      );
  }

  //forgot password link send
  async forgotPassword(email: string): Promise<void> {
    return this.fireauth
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent successfully
        console.log('Password reset email sent successfully');
        alert('Password reset email sent successfully');
      })
      .catch((error) => {
        // Handle any errors that occurred during sending the password reset email
        alert('Error sending password reset email:' + error);
        console.error('Error sending password reset email:', error);
        throw error; // Re-throw the error for the calling function to handle
      });
  }

  /*******************************************************[Ev Station Admin End]***********************************************************/

  //Ev Super Admin
  /*******************************************************[Super Admin]***********************************************************/
  adminLogin(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (authResult) => {
        const uid = authResult.user?.uid || '';

        // Check if the user with this UID exists in the Firestore collection
        const userRef = this.afs.collection('/EvAdmin', (ref) =>
          ref.where('adminId', '==', uid)
        );

        userRef
          .get()
          .toPromise()
          .then((snapshot) => {
            if (snapshot && !snapshot.empty) {
              // User found, check the accountType
              const user = snapshot.docs[0].data() as AdminProfileModel;

              // Check if the UID matches the adminId
              if (uid === user.adminId) {
                if (
                  user.accountType === 'superadmin' ||
                  user.accountType === 'admin'
                ) {
                  // Save user information in session storage
                  this.sst.store('admin', user);

                  // Navigate to the dashboard
                  this.router.navigate(['sadmin']);
                } else {
                  alert(
                    'Unauthorized access. Only superadmin or admin allowed.'
                  );
                }
              } else {
                alert('UID does not match adminId.');
              }
            } else {
              alert('User profile not found.');
            }
          })
          .catch((err) => {
            console.error('Error checking user profile:', err);
            alert('Something went wrong.');
            this.router.navigate(['login/admin']);
          });
      },
      (err) => {
        console.error('Error during login:', err);
        alert('Something went wrong. Please check your credentials.');
        this.router.navigate(['login/admin']);
      }
    );
  }

  //Get Admin Session
  // Retrieve user session from sessionStorage
  getAdminSession(): AdminProfileModel | null {
    const userSession = this.sst.retrieve('admin') as AdminProfileModel;
    return userSession || null;
  }

  //for authguard superadmin
  checkSuperAdminLoggedIn(): boolean {
    // Check if there is an existing session with the admin accountType
    const existingSessionUser = this.sst.retrieve('admin') as AdminProfileModel;

    // Return true if there is an existing session with superadmin or admin accountType, otherwise return false
    return !!(
      existingSessionUser &&
      (existingSessionUser.accountType === 'superadmin' ||
        existingSessionUser.accountType === 'admin')
    );
  }

  // Get Profile Using ID
  async getAdminProfileUsingID(
    adminID: string
  ): Promise<AdminProfileModel | null> {
    // Check if the admin with this ID exists in the Firestore collection
    const userRef = this.afs.collection('/EvAdmin', (ref) =>
      ref.where('adminId', '==', adminID)
    );

    return userRef
      .get()
      .toPromise()
      .then((snapshot) => {
        if (snapshot && !snapshot.empty) {
          // Admin found, return the profile
          const adminProfile = snapshot.docs[0].data() as AdminProfileModel;
          return adminProfile;
        } else {
          // Admin not found
          return null;
        }
      })
      .catch((err) => {
        console.error('Error getting admin profile:', err);
        return null;
      });
  }

  //check that user is already logged in
  checkExistingAdminSession(): void {
    // Check if there is an existing session with the evadmin accountType
    const existingSessionUser = this.sst.retrieve('admin') as EvAdminProfile;

    if (
      (existingSessionUser &&
        existingSessionUser.accountType === 'superadmin') ||
      existingSessionUser.accountType == 'admin'
    ) {
      // Redirect to dashboard since a valid session is already present
      this.router.navigate(['sadmin']);
    } else {
      this.router.navigate(['login/admin']);
    }
  }

  //signout
  logOutAdmin() {
    this.fireauth.signOut().then(() => {
      // Clear the session storage
      this.sst.clear();

      // Redirect to the login page
      this.router.navigate(['login/admin']);
    });
  }
  /*******************************************************[End Super Admin]***********************************************************/
}

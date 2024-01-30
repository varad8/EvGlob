import { Injectable } from '@angular/core';
import { EvAdminProfile } from '../model/ev-admin-profile';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserservicesService {
  constructor(private firestore: AngularFirestore) {}
  // Get the EV admin profiles from Firestore
  getEvAdminProfiles(): Observable<EvAdminProfile[]> {
    return this.firestore
      .collection<EvAdminProfile>('Evstation')
      .valueChanges();
  }

  // Get the EV admin data using userid
  getEvAdminDataByUserId(userid: string): Observable<EvAdminProfile[]> {
    return this.firestore
      .collection<EvAdminProfile>('Evstation', (ref) =>
        ref.where('userid', '==', userid)
      )
      .valueChanges();
  }
}

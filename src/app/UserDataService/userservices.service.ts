import { Injectable } from '@angular/core';
import { EvAdminProfile } from '../model/ev-admin-profile';
import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Bookingmodel } from '../model/bookingmodel';

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

  // Save booking data to Firestore
  saveBookingData(
    bookingData: Bookingmodel
  ): Promise<DocumentReference<Bookingmodel>> {
    const bookingCollection =
      this.firestore.collection<Bookingmodel>('EvBookingData');
    // Generate current timestamp
    const currentTimestamp = Date.now();
    // Assign the current timestamp to the booking data
    bookingData.currentTimestamp = currentTimestamp;
    // Add booking data to the collection
    return bookingCollection.add(bookingData);
  }

  //checking slot availability for that date
  // Get booking data by stationId and date
  getBookingDataByStationIdAndDate(
    stationId: string,
    date: string,
    bookingSlot: string
  ): Observable<Bookingmodel[]> {
    return this.firestore
      .collection<Bookingmodel>('EvBookingData', (ref) =>
        ref
          .where('stationId', '==', stationId)
          .where('bookedForDate', '==', date)
          .where('bookingSlot', '==', bookingSlot)
          .where('visitingStatus', '==', 'not visited')
      )
      .valueChanges();
  }

  //Get Booking data by userid
  getBookingDataByUserId(userid: string): Observable<Bookingmodel[]> {
    return this.firestore
      .collection<Bookingmodel>('EvBookingData', (ref) =>
        ref
          .where('userId', '==', userid)
          .where('visitingStatus', '==', 'not visited')
      )
      .valueChanges();
  }
}

export interface Bookingmodel {
  userId: string;
  evid: string;
  stationId: string;
  bookingSlot: string;
  timeForBooked: string;
  totalHoursEvBooking: string;
  bookedForDate: string;
  currentTimestamp: number;
  totalPayable: number;
  bookingStatus: string;
  remark: string;
  visitingStatus: string;
  visitingTimeStamp: number;
  paymentDetails: {
    transactionid: number;
    paymentType: string;
    paymentStatus: boolean;
    amount: number;
    cardno: string;
    createdDate: number;
  };
}

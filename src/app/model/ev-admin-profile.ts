import { Time } from '@angular/common';

export interface EvAdminProfile {
  evid: string;
  id: string;
  title: string;
  description: string;
  location: { city: string; state: string };
  coordinates: { latitude: string; longitude: string };
  address: string;
  rate: number;
  evTimings: {
    Monday: { openingTime: Time; closingTime: Time };
    Tuesday: { openingTime: Time; closingTime: Time };
    Wednesday: { openingTime: Time; closingTime: Time };
    Thursday: { openingTime: Time; closingTime: Time };
    Friday: { openingTime: Time; closingTime: Time };
    Saturday: { openingTime: Time; closingTime: Time };
    Sunday: { openingTime: Time; closingTime: Time };
  };
  imageUrl: string;
  profile: {
    firstname: string;
    lastname: string;
    dob: string;
    mobile: string;
    email: string;
    dateofjoining: string;
    profilepic: string;
  };
  updatedAt: string;
  accountType: string;
  userid: string;
  accountStatus: {
    approvedBy: string;
    updatedAt: string;
    adminID: string;
    status: string;
    remark: string;
  };
}

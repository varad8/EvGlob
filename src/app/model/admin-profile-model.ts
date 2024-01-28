export interface AdminProfileModel {
  firstName: string;
  lastName: string;
  adminId: string;
  email: string;
  dob: Date;
  address: string;
  registeredAs: string;
  createdBy: string;
  dateOfCreation: Date;
  mobileNo: string;
  accountType: string;
  role: {
    read: boolean;
    write: boolean;
    update: boolean;
    delete: boolean;
  };
  profilepic: string;
}

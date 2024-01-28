# Angular EV Station Admin Application

This Angular application provides features for managing Electric Vehicle (EV) station administration, including user authentication, profile management, and related functionalities. The application is structured with the following key services:

## 1. AdminservicesService

### Dependencies

- **AngularFirestore:** Used for interacting with Firestore database.
- **AngularFireStorage:** Used for handling file uploads to Firebase Storage.

### Service Methods

1. **updateAdminDetails(adminId: string, lastName: string, firstName: string, dob: Date, mobileNo: string, address: string): Promise<void>**

   - Updates admin details including first name, last name, date of birth, mobile number, and address based on the provided `adminId`.

2. **uploadProfileImage(adminId: string, file: File): Promise<string | null>**

   - Uploads a profile image for the admin to Firebase Storage. Returns the download URL of the uploaded image.

3. **deleteProfilePic(picURL: string): Promise<void>**

   - Deletes a profile picture from Firebase Storage based on the provided image URL.

4. **updateProfileImage(adminId: string, profilepic: string): Promise<void>**

   - Updates the profile image URL in the admin profile in Firestore.

5. **getFilenameFromLink(link: string): string**
   - Extracts the filename from a given URL link.

## 2. AdminserviceService

### Dependencies

- **AngularFirestore:** Used for interacting with Firestore database.
- **AngularFireStorage:** Used for handling file uploads to Firebase Storage.

### Service Methods

1. **getEvAdminProfileByUserId(userid: string): Observable<EvAdminProfile | undefined>**

   - Retrieves EvAdminProfile data by `userid` from Firestore.

2. **doesUserExist(userid: string): Observable<boolean>**

   - Checks if a user with a specific `userid` exists.

3. **updateEvAdminProfileFields(userId: string, fieldsToUpdate: Partial<EvAdminProfile['profile']>): Promise<void>**

   - Updates EvAdmin basic details based on `userId` and provided fields.

4. **uploadProfilePic(userId: string, file: File): Promise<string | null>**

   - Uploads a profile picture for the EvAdmin to Firebase Storage.

5. **uploadEvImage(userId: string, file: File): Promise<string | null>**

   - Uploads an EV image for the EvAdmin to Firebase Storage.

6. **deleteProfilePic(picURL: string): Promise<void>**

   - Deletes a profile picture from Firebase Storage based on the provided image URL.

7. **deleteEvImage(picURL: string): Promise<void>**

   - Deletes an EV image from Firebase Storage based on the provided image URL.

8. **updateEVAdminDetails(userId: string, evTimings: Partial<EvAdminProfile['evTimings']>, rate: number, title: string, description: string): Promise<void>**

   - Updates EVAdmin details including timings, rate, title, and description based on `userId`.

9. **getFilenameFromLink(link: string): string**

   - Extracts the filename from a given URL link.

10. **updateEvImage(userId: string, imageUrl: string): Promise<void>**
    - Updates imageUrl in EvAdminProfile based on `userId`.

## 3. AuthService

### Dependencies

- **AngularFireAuth:** Used for authentication with Firebase.
- **AngularFirestore:** Used for interacting with Firestore database.
- **ngx-webstorage:** Used for session storage.

### Service Methods

1. **evadminlogin(email: string, password: string): void**

   - Authenticates EV Station Admin using email and password. Redirects to the admin dashboard upon success.

2. **evadminregister(email: string, password: string): void**

   - Registers a new EV Station Admin using email and password. Creates a new EV Admin Profile in Firestore.

3. **checkExistingSession(): void**

   - Checks if an existing session with an EV Admin account type is present. Redirects to the admin dashboard if true.

4. **getCurrentUserFromSession(): string | undefined**

   - Gets the current user's ID from session storage.

5. **checkEvAdminLoggedIn(): boolean**

   - Checks if an EV Admin is logged in based on the session. Returns `true` if logged in, otherwise `false`.

6. **logOutEvAdmin(): void**

   - Logs out the currently logged-in EV Admin. Clears the session storage and redirects to the EV Admin login page.

7. **getSession(): EvAdminProfile | undefined**

   - Gets the current EV Admin's session information from session storage.

8. **getAdminSession(): AdminProfileModel | null**

   - Retrieves the Super Admin's session information from session storage.

9. **checkSuperAdminLoggedIn(): boolean**

   - Checks if a Super Admin or Admin is logged in based on the session. Returns `true` if logged in, otherwise `false`.

10. **getAdminProfileUsingID(adminID: string): Promise<AdminProfileModel | null>**

    - Retrieves the admin profile using the provided `adminID`.

11. **checkExistingAdminSession(): void**

    - Checks if an existing session with a Super Admin or Admin account type is present. Redirects to the super admin dashboard if true.

12. **logOutAdmin(): void**
    - Logs out the currently logged-in Super Admin or Admin. Clears the session storage and redirects to the admin login page.

## How to Use

1. **Installation:**

   - Install the required dependencies using npm:
     ```bash
     npm install @angular/fire ngx-webstorage
     ```

2. **Service Injection:**

   - Inject the required services in your Angular components or services where needed.

3. **Usage:**

   - Utilize the methods provided by the services based on your application's requirements.

4. **Error Handling:**
   - Handle errors appropriately in the login, registration, and other relevant methods.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

# EvGlob

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

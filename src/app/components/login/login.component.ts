import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showForgotPasswordModal: boolean = false;
  femail: string = '';
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  userLogin() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }
    if (this.password == '') {
      alert('Please enter password');
      return;
    }
    if (this.password.length < 6) {
      alert('Password at least six character long');
      return;
    }

    //evlogin method call
    this.auth.userLogin(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  ngOnInit(): void {
    // Check for an existing session when the component is initialized
    this.auth.checkExistingUserSession();
  }

  //forgot password
  forgotPasswordUsingEmail() {
    // Check if the email is not empty and is in a valid format
    if (this.femail.trim() !== '' && this.isValidEmail(this.femail)) {
      console.log(this.femail);
      this.auth
        .forgotPassword(this.femail)
        .then(() => {
          this.showForgotPasswordModal = false;
          this.femail = ''; // Clear the email field after sending the reset email
        })
        .catch((error) => {
          console.error('Error sending password reset email:', error);
        });
    } else {
      // Handle invalid email format
      console.log('Invalid email format');
      alert('Invalid email');
      // You can display an error message to the user or perform other actions as needed
    }
  }

  // Method to validate email format
  isValidEmail(email: string): boolean {
    // Regular expression for email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  openForgotPasswordModal() {
    this.showForgotPasswordModal = true;
  }
}

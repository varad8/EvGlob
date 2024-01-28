import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css',
})
export class AdminloginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}
  adminLogin() {
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

    this.auth.adminLogin(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    // Check for an existing session when the component is initialized
    this.auth.checkExistingAdminSession();
  }
}

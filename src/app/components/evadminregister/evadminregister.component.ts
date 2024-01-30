import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-evadminregister',
  templateUrl: './evadminregister.component.html',
  styleUrl: './evadminregister.component.css',
})
export class EvadminregisterComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  evregister() {
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
    this.auth.evadminregister(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}

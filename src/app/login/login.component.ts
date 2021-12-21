import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
 public  user: User;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.user = { username: '', password: '', permissions: { create: false, read: false, write: false } }
  }

  async signIn() {
    try {
      const user = await this.auth.signIn(this.user);
      this.auth.setCurrentUser(user);
      this.router.navigate(['dashboard']);
    } catch (error: any) {
      alert(error.err);
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.user = { username: '', password: '', permission: { create: false, read: false, write: false } }
  }

  ngOnInit(): void {
  }

  async singIn() {
    try {
      const user = await this.auth.singIn(this.user);
      this.auth.setCurrentUser(user);
      this.router.navigate(['dashboard']);
    } catch (error: any) {
      alert(error.err);
    }

  }

}

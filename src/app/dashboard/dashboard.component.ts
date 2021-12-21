import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  canCreate = false;
  canWrite = false;
  canRead = false;
  currentUser: User | undefined;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.validateDisplayPermissions();
  }
  validateDisplayPermissions() {
    const user = this.auth.getCurrentUser();
    this.currentUser = user;
    this.canCreate = user.permissions.create;
    this.canWrite = user.permissions.write;
    this.canRead = user.permissions.read;
  }
  signOut() {
    this.auth.signOut();
  }

}

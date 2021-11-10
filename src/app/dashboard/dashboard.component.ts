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
    this.canCreate = user.permission.create;
    this.canWrite = user.permission.write;
    this.canRead = user.permission.read;
  }
  signOut() {
    this.auth.singOut();
  }

}

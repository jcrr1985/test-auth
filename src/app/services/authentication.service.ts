import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { users } from '../data_dummy/valid_users'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: User | undefined;
  constructor(private router: Router) { }

  setCurrentUser(user: User) {
    this.currentUser = user;
    localStorage.setItem("current_user", JSON.stringify(this.currentUser));
  }
  getCurrentUser(): User {
    const userOnLocalStorage = localStorage.getItem('current_user') ? localStorage.getItem('current_user') : null;
    return userOnLocalStorage ? JSON.parse(userOnLocalStorage) : null;
  }

  signIn(user: User): Promise<User> {
    return new Promise((res, rej) => {
      const found = users.find(element => (element.username == user.username && element.password == user.password));
      if (found) res(found)
      else rej({ err: "user no found" });
    })
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}


import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/login-response';

@Injectable()
export class AuthenticationService {

  private loggedInUser: LoginResponse;

  constructor() {
    let userSession=<string>localStorage.getItem("user");
    this.loggedInUser = JSON.parse(userSession);
  }

  isUserLoggedIn(){
    return this.loggedInUser.name!="";
  }

  setLoggedInUser(user: LoginResponse) {
    localStorage.setItem("user",JSON.stringify(user));
    this.loggedInUser = user;
  }

  getLoggedInUser(): LoginResponse {
    return this.loggedInUser;
  }
}

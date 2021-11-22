import { AuthenticationService } from './../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/models/login-model';
import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../models/login-response';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  async logUserIn(userLogin: LoginModel) {
    let response = await this.http.post<LoginResponse>(environment.beAPI + "authorize/login", userLogin).toPromise();
    if(response){
      this.authService.setLoggedInUser(response);
      this.router.navigate(["/home"]);
    }else{
      console.log("Nem jó jelszó",response);
    }
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login-model';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;

  @Output() logUserIntoSytem:EventEmitter<LoginModel>=new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: "",
      password: ["", Validators.minLength(2)]
    });
  }

  ngOnInit(): void {
  }

  logUserIn() {
    let formValue=this.loginForm.value;
    this.logUserIntoSytem.emit(new LoginModel(formValue.userName,formValue.password));
  }

}

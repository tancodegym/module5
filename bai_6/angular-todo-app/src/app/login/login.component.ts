import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup(
    {
      email:new FormControl('',[Validators.required, Validators.pattern("[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9]*)")]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    }
  );
  constructor() { }

  ngOnInit(): void {
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  login() {
    console.log(this.loginForm);
  }
}

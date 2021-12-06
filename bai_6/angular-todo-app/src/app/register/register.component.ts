import {Component, OnInit} from '@angular/core';
import {AbstractControl, Form, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Country} from "../country";

function confirmValidator(control: AbstractControl) {
  return (control.value.password === control.value.confirmPassword) ? null : {passwordNotConfirm: true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryList: Country[] = [
    new Country("1", "India"),
    new Country('2', 'USA'),
    new Country('3', 'England')
  ];

  ngOnInit(): void {
  }

  userForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9]*)")]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }, {validators: confirmValidator}),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.pattern("^\\+84\\d{9,10}$")]),
    });

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('passwordGroup').get('password');
  }

  get confirmPassword() {
    return this.userForm.get('passwordGroup').get('confirmPassword');
  }

  get country() {
    return this.userForm.get('country');
  }

  get age() {
    return this.userForm.get('age');
  }

  get gender() {
    return this.userForm.get('gender');
  }

  get phone() {
    return this.userForm.get('phone');
  }


  constructor() {
  }


  add() {
    console.log(this.userForm.value);
  }

}


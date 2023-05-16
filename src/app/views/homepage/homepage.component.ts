import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  signupForm: any;
  submitted = false;
  
  constructor() {
    
    this.signupForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+]+@[a-z0-9.-]+\.[a-z]{2,}$"),
      ]),
      numberphone: new FormControl('', [
        Validators.required,
        Validators.pattern("(84|0[3|5|7|8|9])+([0-9]{8})")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,

      ]),
    }
    );
  }
  handleCheckEmpty() {

  }
  handleChange() {

  }
  get username() {
    return this.signupForm.get('username');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get numberphone() {
    return this.signupForm.get('numberphone');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.signupForm.value);
    }
  }
  ngOnInit(): void {

  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  checkUsername : boolean= false;
  checkPassword : boolean= false;
  formLogin = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
  });
  handleBlurUsername(event: any) {
    if(event.target.value === '') {
      this.checkUsername = true;
    }
  }
  handleBlurPassword(event: any) {
    if(event.target.value === '') {
      this.checkPassword = true;
    }
  }
  onSubmit() {
    if(this.checkPassword && this.checkPassword) {
      console.log(this.formLogin.value);  
    }
  }
}

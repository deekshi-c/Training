import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogInService } from '../service/signUp/log-in.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css'],
})
export class SellerLoginComponent implements OnInit {
  constructor( private service:LogInService ) {}
   signup:boolean =false;
  signUpForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
  });
  ngOnInit(): void {
  }
  signUp() {
    // console.log(this.signUpForm.value);
    // const body={
    //   "name": this.signUpForm.value.name,
    //   "password": this.signUpForm.value.password,
    //   "email": this.signUpForm.value.email
    // }
    this.service.addSeller().subscribe((data)=>{
      console.log(data);
    });
    this.signup = !this.signup;
  }
}

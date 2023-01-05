import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loadavg } from 'os';
import { LoginServiceService } from '../services/login/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorFlag: boolean= false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logSer: LoginServiceService
  ) {}
  loginResponse:any;
  errorText:any;
  in=false;
  status:any ;
  loginForm!: FormGroup;
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      name: this.fb.control(null, [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/),
      ]),
      password: this.fb.control(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  logIn() {
   
    this.errorFlag=false;
    this.errorText=null;
    const body = {
      userName: this.loginForm.value.name,
      password: this.loginForm.value.password,
    };
    this.logSer.login(body).subscribe({
      next: (data) => {
        this.in=true;
        this.loginResponse=data.body;
        if (this.loginResponse.access_token){
          sessionStorage.setItem('token', this.loginResponse.access_token);
          this.router.navigateByUrl('/home')
        }
        else {
            if (this.loginResponse.message == 'No user found') this.status=false;
            else this.status = true;
            this.errorFlag = true;
            this.errorText = this.loginResponse.message;   
            console.log(this.errorText);
            console.log("__we"+this.status);
            
            
        }
      },
      error: (data) => {
        console.log(data);
      }
    });
    
  }
  toggle(){
     this.in = false;
  }
}

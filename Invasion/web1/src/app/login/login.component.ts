import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: any;
  name: any;
  constructor(
    private service: ServiceService,
    private form: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    // this.service.getUser().subscribe((data) => {
    //   this.users = data;
    // });
  }

  flag = false;
  onClick() {
    this.service.getUser().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (
          this.login.get('username')?.value == data[i].name &&
          this.login.get('password')?.value == data[i].password
        ) {
          this.flag = true;
          break;
        }
      }
      if(this.flag==true){
        localStorage.setItem('name',JSON.stringify(this.login.get('username')?.value));
        this.route.navigateByUrl('/home');
      }
      else alert('Check Username  and Password ');
    });
  }
  login = this.form.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
}

// export class LoginComponent implements OnInit {
//   constructor(
//     private service: ServiceService,
//     private form: FormBuilder,
//     private route: Router
//   ) {}

//   ngOnInit(): void {}
//   onClick() {
//     this.service.getUser().subscribe((data) => {
//       if (
//         this.login.get('username')?.value == data.name &&
//         this.login.get('password')?.value == data.password
//       ) {
//         this.route.navigateByUrl('/home');
//       } else {
//         alert('not valid');
//       }
//     });
//   }
//   login = this.form.group({
//     username: ['', [Validators.required]],
//     password: ['', [Validators.required]],
//   });
// }

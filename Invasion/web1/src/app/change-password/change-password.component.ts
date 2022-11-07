import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { PassThrough } from 'stream';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  users: any;
  constructor(
    private service: ServiceService,
    private form: FormBuilder,
    private route: Router
  ) {}
  name: any;
  ngOnInit(): void {
    this.service.getUser().subscribe((data) => (this.users = data));
  }
  change = this.form.group({
    pass: ['', [Validators.required]],
    newPass: ['', [Validators.required]],
  });

  onClick() {
    if (
      this.change.get('pass')?.value == '' ||
      this.change.get('newPass')?.value == ''
    ) {
      alert('Enter Password');
    } else if (
      this.change.get('pass')?.value != this.change.get('newPass')?.value
    ) {
      alert('Password Missmatch');
    } else {
      this.name = localStorage.getItem('name');
      console.log(this.name);
      this.name = JSON.parse(this.name);
      console.log(this.name);
      this.service.getUser().subscribe((data) => {
        for (let i of data) {
          if (i.name == this.name) {
            const frm ={
              password:this.change.get('pass')?.value,name:i.name
            }
            console.log("sdsadasd")
           this.service.changePassword(frm,i.id).subscribe(data=> this.route.navigateByUrl('/home')) 
          }
        }
      });
    }
  }
}

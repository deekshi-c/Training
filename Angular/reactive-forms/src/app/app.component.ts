import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  registForm = this.fb.group({
    username: ['john',Validators.required],
    email: [''],
    recoverymail: [''],
    dob: [''],
    gender: [''],
    address: this.fb.group({
      hname: [''],
      sname: [''],
      state: [''],
    }),
    password: [''],
    confirmPassword: ['']
  });

  formUser(){
    return this.registForm.get('username');
  }


  preset() {
    this.registForm.setValue({
      username: 'john',
      email: 'john@gmail.com',
      recoverymail: 'recjohn@gmail.com',
      dob: '2002-09-08',
      gender: 'Male',
      address: {
        hname: 'abc',
        sname: '3rd street',
        state: 'goa',
      },
      password: null,
      confirmPassword: null,
    });
  }
}

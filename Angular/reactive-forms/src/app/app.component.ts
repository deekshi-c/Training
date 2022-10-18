import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as e from 'cors';
import { checkPassword } from './pass/pass.validator';
import { forbiddenNameValidators } from './shared/name.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registForm!: FormGroup;
  ngOnInit() {
    this.registForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidators,
            Validators.pattern(/^[A-Za-z ]+$/),
          ],
        ],
        email: [''],
        recoverymail: [''],
        dob: [''],
        subscribe: [false],
        gender: [''],
        address: this.fb.group({
          hname: [''],
          sname: [''],
          state: [''],
        }),
        contactNumber: this.fb.array([]),
        password: [''],
        confirmPassword: [''],
      },
      { validators: checkPassword }
    );

    this.registForm.get('subscribe')?.valueChanges.subscribe((data) => {
      const email = this.registForm.get('email');
      if (data) {
        email?.setValidators(Validators.required);
      } else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });
  }
  constructor(private fb: FormBuilder) {}

  formUser() {
    return this.registForm.get('username');
  }

  get emailId() {
    return this.registForm.get('email');
  }


  get contactNumber(){
    return this.registForm.get('contactNumber') as FormArray;
  }

  addNum(){
    this.contactNumber.push(this.fb.control(''));
  }

  preset() {
    this.registForm.setValue({
      username: 'john',
      email: 'john@gmail.com',
      subscribe: true,
      recoverymail: 'recjohn@gmail.com',
      dob: '2002-09-08',
    
      gender: 'Male',
      address: {
        hname: 'abc',
        sname: '3rd street',
        state: 'goa',
      },
      contactNumber:56656,
      password: null,
      confirmPassword: null,
    });
  }
}

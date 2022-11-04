import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private service: ServiceService,
    private form: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {}
  change = this.form.group({
    pass: ['', [Validators.required]],
    newPass: ['', [Validators.required]]
  });

  onClick(){
    if(this.change.get('pass')?.value!=this.change.get('newPass')?.value){
      alert("Password Missmatch");
    }
    else{ 
      this.route.navigateByUrl('/');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: ServiceService,
    private form: FormBuilder,
    private route:Router

  ) {}

  ngOnInit(): void {}
  onClick() {
    this.service.getUser().subscribe((data) => {
      if(this.login.get('username')?.value==data.name && this.login.get('password')?.value==data.password)
      {
        this.route.navigateByUrl('/home')
      }
      else{
        alert("not valid");
      }
    });
  }
login=this.form.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]]
  
})

}
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-sup-admin',
  templateUrl: './sup-admin.component.html',
  styleUrls: ['./sup-admin.component.css'],
})
export class SupAdminComponent implements OnInit {
  constructor(private service: ServiceService, private form: FormBuilder) {}

  ngOnInit() {
    this.service.getSAdmin().subscribe(data => this.users= data)
    for( let val of this.users){
      console.log(val);
      
    }

  }
  users: any;
  name: any;
  add() {
    let sadmin = false;
    this.name = localStorage.getItem('name')?.replace(/['"]+/g, '');
    console.log(this.name);

    this.service.getSAdmin().subscribe((data) => {
      console.log(data);
      for (let i of data) {
        if (i.name === this.name) {
          console.log('Name : ' + i.name + ' LocAL:' + this.name);
          sadmin = true;
        }
      }
      console.log(sadmin);

      if (sadmin) {
        if (this.admin.valid) {
          const frm = {
            name: this.admin.get('name')?.value,
            id: this.admin.get('id')?.value,
            email: this.admin.get('email')?.value,
          };
          console.log(frm);
          this.service.putSupAdmin(frm).subscribe({
            next: (val) => {
              console.log('added');
            },
          });
        } else alert('Enter proper details');
      } else alert('No access');
    });
    this.service.getAdmin().subscribe((data) => (this.users = data));
  }

  // users=this.service.putSupAdmin()
  admin = this.form.group({
    name: ['', [Validators.required]],
    id: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });
}

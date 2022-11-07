import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private service: ServiceService, private form: FormBuilder) {}
  users: any;
  name: any;
  ngOnInit(): void {
    this.service.getAdmin().subscribe((data) => (this.users = data));
  }
  add() {
    let adm = false;
    let sadmin = false;
    this.name = localStorage.getItem('name')?.replace(/['"]+/g, '');

    this.service.getSAdmin().subscribe((data) => {
      for (let i of data) {
        if (i.name === this.name) {
          console.log('Name : ' + i.name + ' LocAL:' + this.name);
          sadmin = true;
        }
      }

      if (sadmin) {
        if (this.admin.valid) {
          const frm = {
            name: this.admin.get('name')?.value,
            id: this.admin.get('id')?.value,
            email: this.admin.get('email')?.value,
          };
          console.log(frm);
          this.service.putAdmin(frm).subscribe({
            next: (val) => {},
          });
        } else alert('Enter proper details');
      } else {
        this.service.getAdmin().subscribe((data) => {
          for (let i of data) {
            if (i.name === this.name) {
              adm = true;
            }
          }

          if (adm) {
            if (this.admin.valid) {
              const frm = {
                name: this.admin.get('name')?.value,
                id: this.admin.get('id')?.value,
                email: this.admin.get('email')?.value,
              };
              this.service.putAdmin(frm).subscribe({
                next: (val) => {},
              });
            } else alert('Enter proper details');
          } else alert('No access');
        });
      }
    });
    this.service.getAdmin().subscribe((data) => (this.users = data));
  }

  admin = this.form.group({
    name: ['', [Validators.required]],
    id: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });
}

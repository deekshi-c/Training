import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
})
export class FavComponent implements OnInit {
  check: any = true;
  fav: any = true;
  count = 0;
  place = 'Udupi';
  favour: any;
  State = 'Karnataka';
  constructor(public dialog: MatDialog, private route: Router) {}

  ngOnInit(): void {
    this.favour = localStorage.getItem('favour');
    this.favour = JSON.parse(this.favour);
    this.count = this.favour.length;
    if (localStorage.getItem('favour')) {
      this.fav = true;
    } else this.fav = false;
  }

  toggle() {
    this.check = !this.check;
  }
  option() {
    this.dialog.open(DialogComponent, { panelClass: 'custom' });
  }
  back() {
    this.route.navigateByUrl('/');
  }
  removeFav(item: any) {
    let temp = [];
    for (let val of this.favour) {
      if (val != item) {
        temp.push(val);
      }
      // temp.push(val.data)
    }
    if (temp.length == 1) this.fav = false;
    localStorage.setItem('favour', JSON.stringify(temp));
    window.location.reload();
  }
  show(item: any) {
    console.log(item);
     localStorage.setItem('city', JSON.stringify(item));
     this.route.navigate(['']).then(() => {
       window.location.reload();
     });
  }
}

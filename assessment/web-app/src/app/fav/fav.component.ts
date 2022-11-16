import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;
@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
})
export class FavComponent implements OnInit {
  check: any = true;
  fav: any = true;
  count = 0;
  favour: any;
  searchOpen: boolean = false;

  list: any;
  value: any;
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private route: Router
  ) {}

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
  // find(item: any) {
  //   let name = item;
  //   localStorage.setItem('city', JSON.stringify(name));
  //   this.http
  //     .get(`${API_URL}/weather?q=${name}&appid=${API_KEY}`)
  //     .subscribe((data) => {
  //       console.log(data);
  //       this.list = localStorage.getItem('list');
  //       this.list = JSON.parse(this.list) || [];
  //       this.list.unshift({ data });
  //       console.log(this.list);
  //       localStorage.setItem('list', JSON.stringify(this.list));
  //       this.route.navigate(['']).then(() => {
  //         window.location.reload();
  //       });
  //     });
  // }
  // handleS(e: any, item: any) {
  //   e.preventDefault();
  //   this.find(item);
  // }

  // handleKey(e: any, item: any) {
  //   if (e.keyCode == 13) {
  //     this.handleS(e, item);
  //   }
  // }
  // open() {
  //   this.searchOpen = !this.searchOpen;
  // }
}

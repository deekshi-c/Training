import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  fav: any;
  notavail = false;
  avail = true;
  temp: any;
  detail: any;
  recent: any;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private http: HttpClient,
    private loc: Location
  ) {}

  ngOnInit(): void {
    this.fav = localStorage.getItem('fav');
    this.fav = JSON.parse(this.fav);
    if (this.fav == null) {
      this.avail = false;
      this.notavail = true;
    } else {
      this.avail = true;
      this.notavail = false;
    }
    console.log(this.fav);
    
  }
  val(curr: any) {
    return (this.temp = curr.main.temp - 273);
  }
  open() {
    this.dialog.open(DialogComponent);
  }
  remove(data: any) {
    let curr: any = [];
    for (let item of this.fav) {
      if (data.name.toLowerCase() != item.name.toLowerCase()) curr.push(item);
    }
    console.log(curr);

    localStorage.setItem('fav', JSON.stringify(curr));
    console.log("Rolo");
    window.location.reload();
  }
  search(item: any) {
    localStorage.setItem('city', JSON.stringify(item));
    this.router.navigateByUrl('/detail');
  }
}

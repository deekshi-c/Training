import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
})
export class RecentComponent implements OnInit {
  constructor(private router: Router) {}
  fav: any;
  add = true;
  added = false;
  recent: any;
  temp: any;
  notavail = false;
  avail = true;
  flag: any;
  ngOnInit(): void {
    this.recent = localStorage.getItem('recent');
    this.recent = JSON.parse(this.recent);
    if (this.recent == null) {
      this.avail = false;
      this.notavail = true;
    } else {
      this.avail = true;
      this.notavail = false;
    }
  }
  val(curr: any) {
    return (this.temp = curr.main.temp - 273);
  }
  addToFav(detail: any) {
    this.fav = localStorage.getItem('fav');
    this.fav = JSON.parse(this.fav) || [];
    this.flag = 0;
    for (let item of this.fav) {
      if (detail.name.toLowerCase() == item.name.toLowerCase()) {
        this.flag = 1;
        break;
      }
    }
    if (this.flag == 0) {
      this.fav.unshift(detail);
      localStorage.setItem('fav', JSON.stringify(this.fav));
    }
    this.add = false;
    this.added = true;
  }
  remove(detail: any) {
    this.add = true;
    this.added = false;
    console.log('Remove');
    let curr: any = [];
    this.fav = localStorage.getItem('fav');
    this.fav = JSON.parse(this.fav);
    console.log(this.fav);
    for (let item of this.fav) {
      if (detail.name.toLowerCase() != item.name.toLowerCase()) {
        curr.push(item);
      }
    }
    console.log(curr);

    localStorage.setItem('fav', JSON.stringify(curr));
  }
  clear() {
    localStorage.removeItem('recent');
    location.reload();
  }
  check(detail: any) {
    this.fav = localStorage.getItem('fav');
    this.fav = JSON.parse(this.fav);
    this.flag = 0;
    if (this.fav == null) {
      this.add = true;
      this.added = false;
    } else {
      for (let item of this.fav) {
        if (detail.name.toLowerCase() == item.name.toLowerCase()) {
          this.flag = 1;
          break;
        }
      }
      if (this.flag == 1) {
        this.add = false;
        this.added = true;
      } else {
        this.add = true;
        this.added = false;
      }
    }
  }
  search(item: any) {
    localStorage.setItem('city', JSON.stringify(item));
    this.router.navigateByUrl('/detail');
  }
}

import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private _location: Location) {}
  detail: any;
  array = [' original'];
  photo = false;
  text: any;
  type: any;
  flag:any;
  filled = false;
  ngOnInit(): void {
    console.log('init');
    this.detail = localStorage.getItem('current');
    this.type = localStorage.getItem('type');
    this.type = JSON.parse(this.type);
    this.detail = JSON.parse(this.detail);
    console.log(this.detail.alt);
    if (this.detail.alt) this.text = this.detail.alt;
    else this.text = 'Lorem ipsum dolor sit....';
    if (this.type == 'photo') this.photo = true;
    else this.photo = false;
  }
  goBack() {
    this._location.back();
  }
  add(item: any) {
    this.filled = !this.filled;
    console.log(item);
    this.flag = 0;
    for (let data of this.fav) {
      if (data.id == item.id) {
        this.flag = 1;
        break;
      }
    }
    if (this.flag == 0) {
      this.fav.unshift(item);
      localStorage.setItem('fav', JSON.stringify(this.fav));
    }
  }

  remove(item: any) {
    this.filled = !this.filled;
    let curr: any = [];
    console.log(this.fav);

    console.log(this.fav);
    for (let data of this.fav) {
      if (data.id != item.id) {
        curr.push(data);
      }
    }
    console.log(curr);
    localStorage.setItem('fav', JSON.stringify(curr));
    window.location.reload();
  }

  check(item: any) {
    this.flag = 0;
    for (let data of this.fav) {
      if (data.id == item.id) {
        this.flag = 1;
        break;
      }
    }
    if (this.flag == 1) this.filled = true;
    else this.filled = false;
  }
}
  

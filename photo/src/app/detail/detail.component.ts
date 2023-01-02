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
  zoomin = false;
  scale = 1;
  array = [' original'];
  photo = false;
  text: any;
  fav: any;
  type: any;
  flag: any;
  filled = false;
  scaleXY = 'scale(' +1+ ')';
  ngOnInit(): void {
    console.log('init');
    this.fav = localStorage.getItem('fav');
    this.fav = JSON.parse(this.fav) || [];
    this.detail = localStorage.getItem('current');
    this.type = localStorage.getItem('type');
    this.type = JSON.parse(this.type);
    this.detail = JSON.parse(this.detail);
    console.log(this.detail);
    if (this.detail.alt) this.text = this.detail.alt;
    else this.text = 'Lorem ipsum dolor sit....';
    if (this.type == 'photo') this.photo = true;
    else this.photo = false;
  }
  goBack() {
    this._location.back();
  }
  add() {
    this.filled = !this.filled;
    console.log(this.detail);
    this.flag = 0;
    for (let data of this.fav) {
      if (data.id == this.detail.id) {
        this.flag = 1;
        break;
      }
    }
    if (this.flag == 0) {
      this.fav.unshift(this.detail);
      localStorage.setItem('fav', JSON.stringify(this.fav));
    }
  }

  remove() {
    this.filled = !this.filled;
    let curr: any = [];
    console.log(this.fav);

    console.log(this.fav);
    for (let data of this.fav) {
      if (data.id != this.detail.id) {
        curr.push(data);
      }
    }
    console.log(curr);
    localStorage.setItem('fav', JSON.stringify(curr));
    window.location.reload();
  }

  check() {
    this.flag = 0;
    for (let data of this.fav) {
      if (data.id == this.detail.id) {
        this.flag = 1;
        break;
      }
    }
    if (this.flag == 1) this.filled = true;
    else this.filled = false;
  }
  zoomOut() {
    if(this.scale >= 0.5){
        this.scale -= 0.1
    }
    this.scaleXY = 'scale(' + this.scale + ')';
    this.scale = Math.round(this.scale * 10) / 10;
    console.log(this.scale);
    

    this.zoomin = false;
  }
  zoomIn() {
    if (this.scale <= 2) {
      this.scale += 0.1;
    }
        this.scale = Math.round(this.scale * 10) / 10;
      this.scaleXY = 'scale(' + this.scale + ')';
    console.log(this.scale);
    this.zoomin = true;
  }
}
  








import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-w-home',
  templateUrl: './w-home.component.html',
  styleUrls: ['./w-home.component.css'],
})
export class WHomeComponent implements OnInit {
  place = 'Udupi';
  State = 'Karnataka';
  fav: any = true;
  degr:any =false
  val: any = 87;
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.fav = !this.fav;
  }
  dtoggle() {
    this.degr = !this.degr;
  }
}

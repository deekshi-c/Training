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
  val: any = 87;
  bagf='';
  bagc='colorc';
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.fav = !this.fav;
  }
 cel(){
    this.bagf='';
    this.bagc='colorc';

  }
  far(){
    this.bagf='colorf';
    this.bagc='';
  }
}

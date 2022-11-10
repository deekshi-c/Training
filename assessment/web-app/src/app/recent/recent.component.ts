import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
})
export class RecentComponent implements OnInit {
  check: any = true;
  fav: any = true;
  place = 'Udupi';
  State = 'Karnataka';
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.check = !this.check;
  }
  option() {
    // this.dialog.open(DialogComponent);
  }
}
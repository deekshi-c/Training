import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  details: any;
  constructor() {}

  ngOnInit(): void {
    this.details = localStorage.getItem('details');
    this.details = JSON.parse(this.details);
    console.log(this.details);
  }
  getRandomNumber() {
    return Math.floor(Math.random() * 40);
  }
}

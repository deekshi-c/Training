import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css'],
})
export class StarshipDetailsComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.css'],
})
export class PlanetsDetailsComponent implements OnInit {
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

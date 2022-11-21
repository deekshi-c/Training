import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css'],
})
export class SpeciesDetailsComponent implements OnInit {
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

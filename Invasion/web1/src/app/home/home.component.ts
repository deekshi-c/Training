import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public plusclick=false;
  public symbol=true;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.plusclick=!this.plusclick;
    this.symbol=!this.symbol;
  }


}

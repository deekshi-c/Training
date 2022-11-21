import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  public showtool: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  open(){
    this.showtool=true;
  }


}

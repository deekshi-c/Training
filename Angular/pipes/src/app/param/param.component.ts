import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DOB="04/22/2020";
  cost=530.45;

}

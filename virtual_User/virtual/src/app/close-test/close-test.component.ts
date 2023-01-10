import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-test',
  templateUrl: './close-test.component.html',
  styleUrls: ['./close-test.component.css']
})
export class CloseTestComponent implements OnInit {

  chose:any;
notchose:any;
  constructor() { }

  ngOnInit(): void {
  }
cancel(){
  this.chose=true;
  this.notchose=false;
}
quit(){
  this.chose=false;
  this.notchose=true;
}
}
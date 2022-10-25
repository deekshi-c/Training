import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   public data1:any;
  data={
    Name:'Muhammed Salah',
    Country:'Egypt',
    Code:'EG'
  };

}

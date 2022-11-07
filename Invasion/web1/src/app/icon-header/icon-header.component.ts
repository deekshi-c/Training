import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-header',
  templateUrl: './icon-header.component.html',
  styleUrls: ['./icon-header.component.css']
})
export class IconHeaderComponent implements OnInit {

  constructor() { }
name:any;
  ngOnInit(): void { this.name = localStorage.getItem('name')?.replace(/['"]+/g, '');
  }
 
}

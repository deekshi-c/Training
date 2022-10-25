import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin',
  templateUrl: './builtin.component.html',
  styleUrls: ['./builtin.component.css']
})
export class BuiltinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public val:any;
  public date:any;
  detail={
    Fname:'Steve',
    Lname:'Smith',
    Salary:12000,
    Location:'Area'
};
}

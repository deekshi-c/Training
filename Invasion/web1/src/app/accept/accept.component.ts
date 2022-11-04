import { Component, OnInit } from '@angular/core';
import { ThankComponent } from '../thank/thank.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  public checked: any;
  onClick(){
    this.dialog.open(ThankComponent,{
      panelClass:'my-class'
    });
  }

}

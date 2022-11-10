import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
})
export class FavComponent implements OnInit {
  check: any = true;
  fav: any = true;
  count = 8;
  place = 'Udupi';
  State = 'Karnataka';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  toggle() {
    this.check = !this.check;
  }
  option() {
    this.dialog.open(DialogComponent,{panelClass:'custom'});
  }
}

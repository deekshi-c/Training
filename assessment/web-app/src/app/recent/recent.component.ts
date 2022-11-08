import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
})
export class RecentComponent implements OnInit {
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
    this.dialog.open(DialogComponent);
  }
}
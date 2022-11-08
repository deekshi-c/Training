import { DialogModule } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(public dialog:MatDialog) {}

  ngOnInit(): void {}
  toggle() {
    this.check = !this.check;
  }
  option(){
    this.dialog.open(DialogModule);
  }
}

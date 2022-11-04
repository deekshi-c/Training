import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminComponent } from '../admin/admin.component';
import { SupAdminComponent } from '../sup-admin/sup-admin.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog:MatDialog) {}
  public plusclick = false;
  public symbol = true;

  ngOnInit(): void {}
  onClick() {
    this.plusclick = !this.plusclick;
    this.symbol = !this.symbol;
  }
  admin() {
    this.dialog.open(AdminComponent);
  }
  superAdmin(){
    this.dialog.open(SupAdminComponent);
  }
}

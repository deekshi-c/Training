import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  favour:any;
  State = 'Karnataka';
  constructor(public dialog: MatDialog,private route:Router) {}

  ngOnInit(): void {
    this.favour=localStorage.getItem('favour');
    this.favour=JSON.parse(this.favour);
    console.log(this.favour);
    if(localStorage.getItem('favour')){
      this.fav = true;
    }
    else this.fav =false;
    
    
  }
  
  toggle() {
    this.check = !this.check;
  }
  option() {
    this.dialog.open(DialogComponent,{panelClass:'custom'});
  }
  back(){
    this.route.navigateByUrl('/')
  }
}

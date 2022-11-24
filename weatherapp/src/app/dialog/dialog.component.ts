import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  remove(){
    localStorage.removeItem('fav')
    this.router.navigateByUrl('/fav');
    window.location.reload();

  }
  no(){
    this.router.navigateByUrl('/fav');
    window.location.reload();
  }
}

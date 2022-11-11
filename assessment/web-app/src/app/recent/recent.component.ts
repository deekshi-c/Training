import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
})
export class RecentComponent implements OnInit {
  check: any = true;
  fav: any = true;
  recent:any;
  constructor(private route:Router) {}

  ngOnInit(): void {
    this.recent=localStorage.getItem('list');
    this.recent=JSON.parse(this.recent);
    console.log(this.recent);
    if(localStorage.getItem('list')){
      this.fav = true;
    }
    else this.fav =false;
    
    
  }
  toggle() {
    this.check = !this.check;
  }
  option() {
    localStorage.removeItem('list');
    window.location.reload();
  }
  back() {
    this.route.navigateByUrl('/')
  }
}
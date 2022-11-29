import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photos = true;
  video = false;
  favic = false;
  constructor(public router: Router) {}

  ngOnInit(): void {}
  photo() {
    this.router.navigateByUrl('/photos');
     this.photos = true;
     this.video = false;
     this.favic = false;
     
  }
  videos() {
    this.router.navigateByUrl('/videos');
    this.photos = false;
     this.video = true;
     this.favic = false;
  }

 fav() {
    this.router.navigateByUrl('/fav');
    this.photos = false;
     this.video = false;
     this.favic = true;
  }
}

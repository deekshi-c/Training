import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  photos = true;
  video = false;
  favic = false;
  constructor(public router: Router) {}

  ngOnInit(): void {}
  photo() {

     this.photos = true;
     this.video = false;
     this.favic = false;
         this.router.navigateByUrl('/photos');
     
  }
  videos() {
   
    this.photos = false;
     this.video = true;
     this.favic = false;
      this.router.navigateByUrl('/videos');
  }

 fav() {
    
    this.photos = false;
     this.video = false;
     this.favic = true;
     this.router.navigateByUrl('/fav');
  }
}

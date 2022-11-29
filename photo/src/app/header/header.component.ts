import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  headerChange = false;
  ngOnInit(): void {}

  search(a: any) {
    localStorage.setItem('item',JSON.stringify(a));
     window.location.reload();
  }
  @HostListener('window:scroll', []) onScrollEvent(){
   // console.log($event['Window']);
    if(window.pageYOffset >50) {
      this.headerChange = true;
    
    }
    if(window.pageYOffset == 0  ){
      this.headerChange = false;
    }

  } 
}


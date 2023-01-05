import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../services/navBar/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  show=false;
  constructor(private router:Router,
    private service:NavBarService) { }
  profile:any;
  ngOnInit(): void {
    this.service.getProfile().subscribe({
      next: (data) => {
        this.profile=data
      },
      error: (data) => {
      },
    });
  }

  open(){
    this.show=!this.show;
  }

  goMyCourse(){
    this.router.navigateByUrl('/myCourse')
  }

}

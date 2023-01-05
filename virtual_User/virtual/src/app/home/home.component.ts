import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timingSafeEqual } from 'crypto';
import { HomeServiceService } from '../services/Home/home-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  headCourse: any;
  categories: any;
  constructor(private service: HomeServiceService, private router:Router) {}
  name: any;
  onGoing: any;
  currHead: any;
  count: number = 2;
  image: any = [
    'assets/images/Business.png',
    'assets/images/Design.png',
    'assets/images/Health & Fitness.png',
    'assets/images/IT& Software.png',
    'assets/images/Markting.png',
    'assets/images/Music.png',
    'assets/images/Photography.png',
    'assets/images/Teaching.png',
    'assets/images/Testing.png',
    'assets/images/Web Development.png',
  ];
  ngOnInit(): void {
    this.showName();
    this.service.getOnGoing().subscribe((data) => {
      this.onGoing = JSON.parse(data);
    });
    this.head();
    this.service.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
  check(a: any) {
    let b = a;
    if (a.length > 25) return b.slice(0, 25) + '....';
    else return b;
  }

  head() {
    this.service.getBanner(this.count).subscribe((data) => {
      let cHead: any;
      data = JSON.parse(data);
      this.headCourse = data.slice(0, 4);

      console.log(this.currHead);
    });
  }

  showName() {
    this.service.getProfileName().subscribe((data) => {
      this.name = JSON.parse(data);
    });
  }
  goOverview(a: any) {
    console.log(this.onGoing);
    console.log("Overview");
    
    sessionStorage.setItem('Overview', 'true');
    sessionStorage.setItem('courseId', a.courseId);
    sessionStorage.setItem('courseName', a.title);
    this.router.navigateByUrl('/overview');
  }
  goCourse(a: any) {
    console.log(a);
    console.log("course");
    sessionStorage.setItem('Overview', 'false');
    sessionStorage.setItem('courseId', a.courseId);
    sessionStorage.setItem('courseName', a.title);
    this.router.navigateByUrl('/overview');
  }
}

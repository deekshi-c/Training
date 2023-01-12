import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CertificateComponent } from '../certificate/certificate.component';
import { MyCourseService } from '../services/myCourse/my-course.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css'],
})
export class MyCourseComponent implements OnInit {
  constructor(
    private service: MyCourseService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  courses: any;
  completeCourse: any;
  completeFlag = false;
  onGoing: any;
  activeFlag = true;
  courseFlag: any;

  onGoingFlag = false;
  ngOnInit(): void {
    this.service.getComCourse().subscribe({
      next: (data) => {
        this.completeCourse = JSON.parse(data);
        this.completeFlag = true;
        console.log(this.completeCourse);
        this.service.getOnGoing().subscribe({
          next: (data) => {
            this.onGoingFlag = true;
            this.onGoing = JSON.parse(data);
            console.log(this.onGoing);
            if (this.completeFlag && this.onGoingFlag) this.courseFlag = true;
            else this.courseFlag = false;
            this.courses = this.completeCourse;
          },
          error: (data) => {
            console.log(data);
          },
        });
      },
      error: (data) => {
        console.log(data);
      },
    });
  }

  activeO() {
    this.activeFlag = true;
    this.courses = this.onGoing;
  }
  activeC() {
    this.activeFlag = false;
    this.courses = this.completeCourse;
  }
  check(a: any) {
    let b = a;
    if (a.length > 25) return b.slice(0, 25) + '....';
    else return b;
  }
  goOverview(a: any, b: any) {
    console.log(this.onGoing);
    localStorage.setItem('currPage', b);
    sessionStorage.setItem('Overview', 'true');
    sessionStorage.setItem('courseId', a.courseId);
    sessionStorage.setItem('courseName', a.title);
    this.router.navigateByUrl('/overview');
  }

  goCourse(a: any, b: any) {
    console.log(a);
    localStorage.setItem('currPage', b);
    sessionStorage.setItem('Overview', 'false');
    sessionStorage.setItem('courseId', a.courseId);
    sessionStorage.setItem('courseName', a.title);
    this.router.navigateByUrl('/overview');
  }
  getCertificate(a: any,b:any) {
    sessionStorage.setItem('courseName',a)
    sessionStorage.setItem('courseId', b);
    this.dialog.open(CertificateComponent,{
       
      height: '60%',
      width: '60%',
    
    })
  }
}

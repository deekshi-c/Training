import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OverViewSerService } from '../services/overViewService/over-view-ser.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.css'],
})
export class OverViewComponent implements OnInit {
  constructor(private service: OverViewSerService) {}
  overview: any;
  title: any;
  videoclick = false;
  onGo = true;
  courseDetails: any;
  chapters: any;
  ngOnInit(): void {
    this.title = sessionStorage.getItem('courseName');
    this.overview = sessionStorage.getItem('Overview');
    this.overview = JSON.parse(this.overview);
    this.getOverView();
    this.getChapt();
  }
  overView() {
    this.overview = true;
  }
  close() {
    this.videoclick = false;
  }
  onGoClick() {
    this.onGo = false;
  }
  getOverView() {
    this.service.getOverview().subscribe({
      next: (data) => {
        this.courseDetails = data;
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
    });
  }
  getChapt() {
    this.service.getChapters().subscribe({
      next: (data) => {
        this.chapters = data;
        // console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
    });
  }
  onOverview() {
    this.overview = true;
  }
  onChapter(){
    this.overview = false;
  }
}

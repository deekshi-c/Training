import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css'],
})
export class CongratsComponent implements OnInit {
  chapterNumber: any;
  chapterName: any;
  courseName: any;
  titleName: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.chapterNumber = JSON.parse(sessionStorage.getItem('chapNo') as any);
    this.chapterName = sessionStorage.getItem('chapName');
    this.courseName = sessionStorage.getItem('courseName')
    this.titleName = sessionStorage.getItem('titleName');
  }
  result() {
    this.router.navigate(['/testResult']);
  }
}
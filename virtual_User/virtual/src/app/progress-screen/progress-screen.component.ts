import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from '../services/test/test.service';
import { TestResultComponent } from '../test-result/test-result.component';

@Component({
  selector: 'app-progress-screen',
  templateUrl: './progress-screen.component.html',
  styleUrls: ['./progress-screen.component.css'],
})
export class ProgressScreenComponent implements OnInit {
  result: any;
  chapterNumber: any;
  chapterName: any;
  display = false;
  courseName: any;
  constructor(private dialog: MatDialog, private service: TestService) {}

  ngOnInit(): void {
    this.testResult();
  }
  solutions() {
    sessionStorage.removeItem('index');
    this.dialog.open(TestResultComponent, {
      height: '100%',
      width: '50%',
      panelClass: 'custom',
    });
  }
  testResult() {
    this.service.testResult().subscribe({
      next: (data: any) => {
        console.log(data);
        this.chapterNumber =
          sessionStorage.getItem('chapNo');
        this.chapterName =
          sessionStorage.getItem('chapName');
        this.courseName =
          sessionStorage.getItem('courseName');
        this.result = data;
        sessionStorage.setItem('sstatus',this.result.message)
        console.log(this.result.correctlyAnsweredInHundred);
      },
      error: (e: any) => {
        alert(e);
      },
    });
  }
  particularQ(index: any) {
    sessionStorage.setItem('index', index);
    this.dialog.open(TestResultComponent, {
      height: '100%',
      width: '50%',
      panelClass: 'custom',
    });
  }
}
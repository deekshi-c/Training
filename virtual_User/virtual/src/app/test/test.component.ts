import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from '../services/test/test.service';
import { CloseTestComponent } from '../close-test/close-test.component';
import { SubmitComponent } from '../submit/submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  chapterNumber: any;
  chapterName: any;
  clicked = false;
  remTime: any;
  pause: any;
  paused: any;
  remaining: any;
  timer: any;
  interval: any;
  constructor(
    private dialog: MatDialog,
    private service: TestService,
    private router: Router
  ) {}
  questions: any;
  rowClicked: any;
  chosenIndex: any;
  option: any;
  chose: any;
  notchose: any;
  answersArr: any[] = [];
  j = 0;
  counter: any;
  index: any;
  option1: any;
  highlightArr: any;

  ngOnInit(): void {
    this.getQuestions();
    this.chapterNumber =sessionStorage.getItem('chapNo') ;
    this.chapterName =sessionStorage.getItem('chapName');
  }
  close() {
    this.dialog.open(CloseTestComponent, { height: '25%', width: '50%' });
  }
  getQuestions() {
    this.service.courseTests().subscribe((data: any) => {
      this.questions = data;
      console.log(data);
      this.remTime = this.questions.totalTimeAlloted;

      this.answersArr = new Array(this.questions.totalQuestions).fill(null);
      console.log(this.answersArr);
      // this.startCountdown();
    });
  }

  goBack() {
    this.clicked = false;
    this.rowClicked = -1;
    if (this.j > 0) {
      this.j--;
      this.questions.questions[this.j] = this.questions.questions[this.j];
    }
  }
  goNext() {
    this.clicked = false;
    this.rowClicked = -1;
    if (this.j + 2 <= this.questions.totalQuestions) {
      this.j++;
      this.questions.questions[this.j] = this.questions.questions[this.j];
      // console.log(this.i);
    }
  }

  selectedChoice(i: any) {
    this.answersArr[this.j] = i;
    this.index = i;
    console.log();
    console.log(this.answersArr);
  }

  changeTableRowColor(idx: any) {
    if (this.chosenIndex != idx) {
      this.clicked = false;
    }
    if (this.rowClicked === idx) this.rowClicked = -1;
    else this.rowClicked = idx;
    this.chosenIndex = idx;
    this.clicked = !this.clicked;
    if (this.clicked == false) {
      this.chosenIndex = null;
    }
  }
  startCountdown() {
    this.pause = false;
    this.counter = Number(this.remTime);
    if (this.pause == false) {
      this.interval = setInterval(() => {
        this.counter--;
        if (this.counter <= 0) {
          this.submitTest();
          clearInterval(this.interval);
        }
      }, 1000);
    }
  }

  submit() {
    this.pause = true;
    // console.log(this.answersArr);
    
    sessionStorage.setItem('answers', JSON.stringify(this.answersArr));
    sessionStorage.setItem('timer', this.counter);
    this.timer = this.counter;
    let dialogRef = this.dialog.open(SubmitComponent, {
      height: '40%',
      width: '40%',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res.data == 'done') {
        clearInterval(this.interval);
      }
    });
  }
  submitTest() {
    // this.chose = true;
    // this.notchose = false;
    // // clearInterval(this.interval);
    // let answers = JSON.parse(sessionStorage.getItem('answers') as any);
    // this.service.submit().subscribe({
    //   next: (data) => {
    //     // console.log(data);
    //     this.router.navigate(['/congratulations']);
    //     let show = JSON.parse(data);
    //     // alert(show.message);
    //     if (show.message == 'You have already passed this test') {
    //       this.router.navigate(['/congratulations']);
    //     } else {
    //       // alert('Test failed')
    //       this.router.navigate(['/courseOverview']);
    //     }
    //   },
    //   error: (e) => {},
    // });
  }
}
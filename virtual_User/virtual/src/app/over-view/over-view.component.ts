import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OverViewSerService } from '../services/overViewService/over-view-ser.service';
import { CertificateComponent } from '../certificate/certificate.component';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.css'],
})
export class OverViewComponent implements OnInit {
  @ViewChild('scroll') scroll: ElementRef;

  btnShow: any;
  completionDate: any = [];
  joiningDate: any = [];
  completed: any;
  hour: any;
  chapter_completed: any;
  length: any;
  show: any = [];
  onGoingSerial: any;
  watch_chapter_number: any;
  currentLessonIndex: any;
  activeVideo: any;
  serialNum: any;
  pauseTime: any;
  onGoing: any;
  videoStatus: any;
  testArray: any;
  testMessage: any;
  constructor(
    private service: OverViewSerService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  overview: any;
  title: any;
  isReadMore = true;
  videoclick = false;
  onGo: any;
  temp: any;
  tchap: any;
  courseDetails: any;
  chapters: any;
  currPage: any;
  c:any
  ngOnInit(): void {
    this.c=0 ;
    sessionStorage.removeItem('timer');
    this.currPage = localStorage.getItem('currPage');
    this.title = sessionStorage.getItem('courseName');
    this.overview = sessionStorage.getItem('Overview');
    this.overview = JSON.parse(this.overview);
    this.getOverView();
    this.getChapt();
    this.getProgress();
    this.setpreview();
    
  }
  setpreview() {
    this.service.getOverview().subscribe({
      next: (data) => {
        this.temp = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.activeVideo =
          this.temp.courseOverview.overViewId.previewThisCourse.videoLink;
      },
    });
  }
  overView() {
    this.overview = true;
    this.setpreview();
  }
  close() {
    this.videoclick = false;
    this.onGo = false;
  }
  onGoClick() {
    this.onGo = false;
    this.overview = false;
    let pos = this.chapters?.isEnrolled.ongoingVideo.chapterNo - 1;
    let lIndex = this.chapters?.isEnrolled.ongoingVideo.lessonNo - 1;

    let val =
      this.chapters.listOfChapters.totalChapters[0].chapters[pos].lessons[
        lIndex
      ];
    this.onPlayClick(val, lIndex, pos);
    this.show[pos] = false;
  }
  getOverView() {
    this.service.getOverview().subscribe({
      next: (data) => {
        this.courseDetails = data;
        // console.log(this.courseDetails);
        this.tchap =
          this.courseDetails.courseOverview.courseContent.totalChapters;
        let string = this.courseDetails.isEnrolled.dateOfCompletion;
        this.testArray = this.courseDetails.isEnrolled.testApprovalRate;
        if (this.courseDetails?.isEnrolled.ongoingSerialNumber > 0 && this.c < 1) {
          this.onGo = true;
          this.c++;
        }
        if (this.courseDetails.isEnrolled.approvalRate == '0')
          this.completed = true;
        else {
          this.completed = false;
          string = string.substring(0, string.indexOf('T'));
          sessionStorage.setItem('CDate', string);
          this.completionDate = string.split('-');
          console.log(this.completionDate);
        }
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
        console.log(
          this.chapters.listOfChapters.totalChapters[0].chapters.length
        );

        this.hour = (
          this.chapters.listOfChapters.courseContent.totalDuration / 3600
        ).toFixed(2);
        this.watch_chapter_number =
          this.chapters.isEnrolled.ongoingSerialNumber;
        this.chapter_completed = this.chapters.isEnrolled.chaptersCompleted;
        this.length =
          this.chapters.listOfChapters.totalChapters[0].chapters.length;
        for (var i = 0; i < this.length; i++) {
          this.show.push('false');
        }
      },
      error: (data) => {
        console.log(data);
      },
    });
  }
  onOverview() {
    this.overview = true;
  }
  onChapter() {
    this.overview = false;
  }
  // showText() {
  //   this.isReadMore = !this.isReadMore;
  // }
  // trim(a:any){
  //   let b = a;
  //   if(b.length > 20){
  //     this.btnShow=true;
  //     return b.substring(0,20);
  //   }
  //   else{
  //     this.btnShow=false
  //     return a;
  //   }
  // }
  display(a: any) {
    this.show[a] = !this.show[a];
  }

  con(a: any) {
    console.log(a);
  }
  getPauseTime() {
    var myVideo: any = document.getElementById('singleVideo');
    this.pauseTime = myVideo.currentTime;

    if (myVideo.paused) {
      this.videoPause(this.pauseTime);
    }
  }

  videoEnd() {
    console.log('EndWorks');
    const body = {
      courseId: sessionStorage.getItem('courseId'),
      videoCompleted: 'true',
      // "pauseTime": this.pauseTime,
      videoSerialNumber: this.serialNum,
    };

    this.service.updateProgress(body).subscribe({
      next: (data) => {
        this.onGoing = data;
        console.log(data);
      },
      error: (data) => {
        console.log(data);
        this.getProgress();
        alert(data.error.message + ':Finish the Test');
      },
      complete: () => {
        this.getChapt();
        this.getOverView();
        this.getProgress();
        this.next();
      },
    });
  }

  onPlayClick(item: any, a: any, b: any) {
    this.onGo = false;
    console.log(item);
    localStorage.setItem('cIndex', b);
    localStorage.setItem('lIndex', a);
    this.getProgress();

    console.log(b);
    console.log(a);
     this.getProgress();
     this.getOverView();
     this.getChapt();
    // console.log(item);
    this.videoclick = false;
    let currserialNum = item.serialNumberOfLesson;
    this.onGoingSerial = JSON.parse(this.onGoingSerial);
    this.videoStatus = JSON.parse(this.videoStatus);
    if (currserialNum <= this.onGoingSerial) {
      this.activeVideo = item.url;
      this.serialNum = currserialNum;
      if (this.videoStatus.length > 0) {
        for (let val of this.videoStatus) {
          if (val.serialNumber == item.serialNumberOfLesson) {
            this.videoclick = true;
            this.pauseTime = val.pauseTime;
          }
        }
      }
    } else {
      this.getProgress();
      alert('First Finish video ' + this.onGoingSerial + ' to continue');
    }
  }

  getProgress() {
    this.service.getProgress().subscribe({
      next: (data) => {
        this.onGoing = data;
        let string = this.onGoing?.enrolledOn;
        string = string.substring(0, string.indexOf('T'));
        sessionStorage.setItem('jDate', string);
        this.joiningDate = string.split('-');
        this.videoStatus = sessionStorage.setItem(
          'status',
          (JSON.stringify(this.onGoing.allVideoStatus) as any) || []
        );
        this.videoStatus = sessionStorage.getItem('status');
        sessionStorage.setItem(
          'onGoingSerialNumber',
          JSON.stringify(this.onGoing.ongoingSerialNumber) as any
        );
        this.onGoingSerial = sessionStorage.getItem('onGoingSerialNumber');
      },
      error: (data) => {
        console.log(data);
      },
    });
  }
  videoPause(pauseTime: any) {
    this.videoclick = false;
    const body = {
      courseId: sessionStorage.getItem('courseId'),
      videoCompleted: 'false',
      pauseTime: pauseTime,
      videoSerialNumber: this.serialNum,
    };
    console.log(body);
    this.service.updateProgress(body).subscribe((data: any) => {
      console.log(data);
    });
  }

  testStat(item: any) {
    sessionStorage.setItem('testId', item._id);
    this.service.testStatus().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
    });
  }

  test(item: any, chapter: any) {
    console.log(item.testNumber);
    console.log(this.chapters.isEnrolled.testApprovalRate);
    if (
      this.chapters.isEnrolled.testApprovalRate[item.testNumber - 2] != 0 ||
      item.testNumber == 1
    ) {
      sessionStorage.setItem('chapNo', chapter.chapterNumber);
      sessionStorage.setItem('chapName', chapter.chapterTitle);
      sessionStorage.setItem('testId', item._id);
      sessionStorage.setItem('chap_id', chapter._id);
      this.service.gettestService().subscribe({
        next: (data) => {
          let temp: any = data;
          // if (temp.message == 'true') {
          //   if (confirm(' Test already Taken: Go to Result'))
          //     this.router.navigate(['testResult']);
          //   else this.router.navigate(['overview']);
          // } else {
            sessionStorage.removeItem('answers');
            sessionStorage.removeItem('timer');
            this.router.navigate(['test']);
          // }
        },
        error: (data) => {
          console.log(data);
        },
      });
    } else alert('Complete Test :' + this.index());
  }

  index() {
    let i = 0;
    for (let item of this.chapters.isEnrolled.testApprovalRate) {
      if (item == 0) break;
      else i++;
    }
    return i + 1;
  }
  testresult() {
    this.service.getresult().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (x) => {
        console.log(x);
      },
    });
  }
  getCertificate() {
    this.dialog.open(CertificateComponent, {
      height: '60%',
      width: '60%',
    });
  }

  next() {
    let cIndex = Number(localStorage.getItem('cIndex')) || 0;
    let lIndex = Number(localStorage.getItem('lIndex')) || 0;
    let noOfLesson =
      this.chapters.listOfChapters.totalChapters[0].chapters[cIndex]
        .numberOfLessons;
    if (lIndex + 1 < noOfLesson) {
      let val =
        this.chapters.listOfChapters.totalChapters[0].chapters[cIndex].lessons[
          lIndex + 1
        ];
      console.log(val);

      this.onPlayClick(val, lIndex + 1, cIndex);
    } else {
      
      if (cIndex + 1 < this.tchap) {
        console.log('4dfdfssdf');
        lIndex = 0;
        console.log(cIndex);
        let val =
          this.chapters.listOfChapters.totalChapters[0].chapters[cIndex+1]
            .lessons[lIndex];
        console.log(val);
        this.onPlayClick(val, lIndex, cIndex + 1);
      } else {
        let val =
          this.chapters.listOfChapters.totalChapters[0].chapters[cIndex]
            .lessons[lIndex];
        console.log(val);
        this.onPlayClick(val,lIndex, cIndex);
      }
    }
    this.getProgress();
    this.getOverView();
    this.getChapt();
  }
}

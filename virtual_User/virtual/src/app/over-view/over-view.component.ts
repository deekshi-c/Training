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
  btnShow: any;
  completionDate:any=[];
  completed:any;
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
  constructor(private service: OverViewSerService, private router: Router) {}
  overview: any;
  title: any;
  isReadMore = true;
  videoclick = false;
  onGo: any;
  courseDetails: any;
  chapters: any;
  ngOnInit(): void {
    this.title = sessionStorage.getItem('courseName');
    this.overview = sessionStorage.getItem('Overview');
    this.overview = JSON.parse(this.overview);
    this.getOverView();
    this.getChapt();
    this.getProgress();
    this.activeVideo =
      this.courseDetails?.courseOverview.overViewId.previewThisCourse.videoLink;
  }
  overView() {
    this.overview = true;
  }
  close() {
    this.videoclick = false;
  }
  onGoClick() {
    this.onGo = false;
    // console.log(this.chapters?.isEnrolled.ongoingSerialNumber);
    let pos = this.chapters?.isEnrolled.ongoingVideo.chapterNo - 1;
    let lIndex = this.chapters?.isEnrolled.ongoingVideo.lessonNo - 1;
    this.activeVideo =
      this.chapters.listOfChapters.totalChapters[0].chapters[pos].lessons[
        lIndex
      ].url;

    // this.show.splice(pos,1,'true');
    // console.log(this.show);
  }
  getOverView() {
    this.service.getOverview().subscribe({
      next: (data) => {
        this.courseDetails = data;
        console.log(data);
        let string = this.courseDetails.isEnrolled.dateOfCompletion;
        this.testArray = this.courseDetails.isEnrolled.testApprovalRate;
        if (this.courseDetails.isEnrolled.ongoingSerialNumber > 0) {
          this.onGo = true;
        }
        if(this.courseDetails.isEnrolled.approvalRate == '0') this.completed=true;
        else{ 
          this.completed=false;
          string=string.substring(0, string.indexOf('T'));
          this.completionDate=string.split('-')
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
        this.getChapt();
        this.getChapt();
      },
      error: (data) => {
        console.log(data);
        this.getProgress();
        alert(data.error.message + ':Finish the Test');
      },
    });
  }

  onPlayClick(item: any) {
    this.onGo = false;
    this.getProgress();
    // console.log(item);
    this.videoclick = false;
    let currserialNum = item.serialNumberOfLesson;
    this.onGoingSerial = JSON.parse(this.onGoingSerial);
    this.videoStatus = JSON.parse(this.videoStatus);
    if (currserialNum <= this.onGoingSerial) {
      this.activeVideo = item.url;
      this.serialNum = currserialNum;
      console.log(this.videoStatus);
      if (this.videoStatus.length > 0) {
        for (let val of this.videoStatus) {
          if (val.serialNumber == item.serialNumberOfLesson) {
            this.videoclick = true;
            this.pauseTime = val.pauseTime;
            // console.log(this.pauseTime);
          }
        }
      }
      console.log('Present');
    } else {
      this.getProgress();
      alert('First Finish video ' + this.onGoingSerial + ' to continue');
    }
  }

  getProgress() {
    this.service.getProgress().subscribe({
      next: (data) => {
        this.onGoing = data;
        // console.log(data);

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
    sessionStorage.setItem('chapNo', chapter.chapterNumber);
    sessionStorage.setItem('chapName', chapter.chapterTitle);
    sessionStorage.setItem('testId', item._id);
    sessionStorage.setItem('chap_id', chapter._id);
    this.service.gettestService().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log(this.testMessage);
        if (this.testMessage == 'true') {
        } else {
          this.router.navigate(['test']);
        }
      },
    });
  }
}

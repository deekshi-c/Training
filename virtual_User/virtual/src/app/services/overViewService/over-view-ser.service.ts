import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class OverViewSerService {
  constructor(private http: HttpClient) {}
  getOverview() {
    const body: any = {
      courseId: sessionStorage.getItem('courseId'),
    };
    return this.http.post(baseUrl + 'getCourse/overview', body);
  }

  getChapters() {
    const body: any = {
      courseId: sessionStorage.getItem('courseId'),
      view: 'chapters',
    };
    return this.http.post(baseUrl + 'getCourse/chapters', body);
  }

  updateProgress(body: any) {
    console.log(body);
    return this.http.post(baseUrl + 'updateProgress', body);
  }

  getProgress() {
    const body: any = {
      courseId: sessionStorage.getItem('courseId'),
    };
    return this.http.post(baseUrl + 'getProgress', body);
  }

  getVideoData() {
    const body: any = {
      courseId: sessionStorage.getItem('courseId'),
      serialNumberOfLesson: sessionStorage.getItem('serialNumber'),
    };
    return this.http.post(baseUrl + 'getVideoData', body);
  }
  gettestService() {
    let testid = sessionStorage.getItem('testId');
    const body = {
      testId: testid,
    };
    return this.http.post(baseUrl + 'getTestStatus', body);
  }
  testStatus() {
    let testid = sessionStorage.getItem('testId');
    let body = {
      testId: testid,
    };
    return this.http.post(baseUrl + `getTestStatus`, body);
  }
}

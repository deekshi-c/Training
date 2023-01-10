import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}
  courseTests() {
    const body = {
      courseId: sessionStorage.getItem('courseId'),
      testId: sessionStorage.getItem('testId'),
    };
    console.log(body);

    return this.http.post(baseUrl + 'displayTest', body);
  }
  submit() {
    let answers = JSON.parse(sessionStorage.getItem('answers') as any);
    console.log(typeof sessionStorage.getItem('chapNo'));

    let body = {
      courseId: sessionStorage.getItem('courseId'),
      testId: sessionStorage.getItem('testId'),
      chapterNumber: JSON.parse(sessionStorage.getItem('chapNo') as any),
      chapterTitle: sessionStorage.getItem('chapName'),
      chapterId: sessionStorage.getItem('chap_id'),
      answers: answers,
    };
    console.log(body);
    return this.http.post(baseUrl + `submitTest`, body);
  }
  testResult() {
    let testid = sessionStorage.getItem('testId');
    let body = {
      testId: testid,
    };
    return this.http.post(
      baseUrl + `getCompletedTestResultData`,
      body);
  }

  
}

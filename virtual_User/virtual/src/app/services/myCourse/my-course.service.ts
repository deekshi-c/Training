import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MyCourseService {
  constructor(private http: HttpClient) {}
  getComCourse(){
    return this.http.get(`${baseUrl}completedCourses?choice=seeAll`, {
      responseType: 'text',
    });
  }
  getOnGoing(){
    return this.http.get(`${baseUrl}ongoingCourses?choice=seeAll`, {
      responseType: 'text',
    });
  }
}

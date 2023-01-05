import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(private http: HttpClient) {}
  getProfileName() {
    return this.http.get(`${baseUrl}getName`, {
      responseType: 'text',
    });
  }

  getOnGoing() {
    return this.http.get(`${baseUrl}ongoingCourses`, {
      responseType: 'text',
    });
  }
  getBanner(count: any) {
    return this.http.get(baseUrl + 'getBanner?page=' + count, {
      responseType: 'text',
    });
  }
  getCategory() {
   return this.http.post(baseUrl + 'getCategories', {
     responseType: 'text',
   });
  }
}

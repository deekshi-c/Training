import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  constructor(private http: HttpClient) {}
  getProfile(){
    return this.http.get(`${baseUrl}getProfileImage`, {
      responseType: 'text',
    });
  }
}

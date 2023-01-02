
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  login(body:any){
    console.log(body);
    console.log(baseUrl);
    return this.http.post(`${baseUrl}signIn`, body,{
      observe:'response',
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http:HttpClient) { }
  getdetails(url:any){
    return this.http.get(url)
  }
}

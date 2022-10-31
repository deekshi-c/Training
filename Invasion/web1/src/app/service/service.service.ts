import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

interface login {
  id: number;
  name: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {  }

  getUser():Observable<login>{
    return this.http.get<login>('http://localhost:3000/user');
  }
}
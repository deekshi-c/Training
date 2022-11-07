import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

interface login extends Array<login[]>
 {
  id: number;
  name: string;
  password: string;
}
interface admin extends Array<admin[]> {
  id: number;
  name: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<login[]> {
    return this.http.get<login[]>('http://localhost:3000/user');
  }
  getAdmin(): Observable<admin[]> {
    return this.http.get<admin[]>('http://localhost:3000/admin');
  }
  getSAdmin(): Observable<admin[]> {
    return this.http.get<admin[]>('http://localhost:3000/Sadmin');
  }
  putAdmin(data: any) {
    return this.http.post('http://localhost:3000/admin', data);
  }
  putSupAdmin(data: any) {
    return this.http.post('http://localhost:3000/Sadmin', data);
  }
  changePassword(data: any,id: any){
    console.log(typeof(data));
    return this.http.put('http://localhost:3000/user/'+id,data)
  }
}
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User{
  name: string,
  email: string,
  id: number,
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }


  getUsers():Observable<User> {
    const headers1 =new HttpHeaders({
      'content-type': 'app',
      'authenticationToken':'435433'
    });
    const parameters = new HttpParams()
    .set('pageSize','10')
    .set('pageoptions','100');
   return this.http.get<User>('https://jsonplaceholder.typicode.com/users', {
     headers: headers1,
     params: parameters,
   });
  }

  saveUser(data: any){
    return this.http.post('https://jsonplaceholder.typicode.com/users',data);
  }
}

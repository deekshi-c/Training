import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: '563492ad6f917000010000015b96813dfe72424083426410387bcc76'
  })
};
@Injectable({
  providedIn: 'root',
})
export class PexelService {
  constructor(private http: HttpClient) {}

  getDataP(item: any): Observable<any> {
    console.log(item);

    const urlp =
      'https://api.pexels.com/v1/search?query=' + item + '&per_page=16';
    return this.http.get<any>(urlp, httpOptions);
  }
  getDataV(item: any): Observable<any> {
    console.log(item);
    const urlv =
      'https://api.pexels.com/videos/search?query='+item+
      '&per_page=10';
    return this.http.get<any>(urlv, httpOptions);
  }
}

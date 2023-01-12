import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
 constructor(private http: HttpClient) { }

    topSearch() {
        return this.http.get(baseUrl + 'topSearches',  { responseType: 'text' })
    }

    byCategory(body: any){
        return this.http.post(baseUrl + 'searchByCategory', body)
    }

    searchCourse(body: any){
        return this.http.post(baseUrl + 'searchCourse', body)
    }

}

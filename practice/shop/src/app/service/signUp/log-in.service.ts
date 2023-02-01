import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LogInService {
  headers = new HttpHeaders()
    .set('x-rapidapi-key', '92518e5fee537a57b4d4eec560922402');
  constructor(private http: HttpClient) {}
  addSeller() {
    console.log();
    return this.http.get(
      'https://v3.football.api-sports.io/teams/statistics?league=39&team=33&season=2019',
      { headers: this.headers }
    );
  }
}

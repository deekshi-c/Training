import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'post';
  constructor(private cookie: CookieService) {}
  cookieKey: any;
  cookieValue: any;

  addlocal(a: any, b: any) {
    localStorage.setItem(a, b);
  }
  getlocal(a: any) {
    alert(localStorage.getItem(a));
  }
  delelocal(a: any) {
    localStorage.removeItem(a);
  }
  clearlocal() {
    localStorage.clear();
  }
  addsession(a: any, b: any) {
    sessionStorage.setItem(a, b);
  }
  getsession(a: any) {
    alert(sessionStorage.getItem(a));
  }
  delesession(a: any) {
    sessionStorage.removeItem(a);
  }
  clearsession() {
    sessionStorage.clear();
  }
  addCookie(cookieKey: string,
  cookieValue: string) {;
    this.cookie.set(cookieKey, cookieValue);
  }
  getCookie(cookieKey: any) {
    alert(this.cookie.get(cookieKey));
  }
  getallCookie() {
    alert(JSON.stringify(this.cookie.getAll()));
  }
  deletcookieAll() {
    this.cookie.deleteAll();
  }
  deletcookie(cookieKey: any) {
    this.cookie.delete(cookieKey);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  time: any;
  detail: any;
  recent: any = [];
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.time = new Date();
  }

  find(item: any) {
    localStorage.setItem('city', JSON.stringify(item));
    let curr: any = [];
    this.http
      .get(`${API_URL}/weather?q=${item}&appid=${API_KEY}`)
      .subscribe((data) => {
        this.detail = data;
        this.recent = localStorage.getItem('recent');
        this.recent = JSON.parse(this.recent) || [];
        console.log(this.recent);

        for (let item of this.recent) {
            if ((this.detail.name).toLowerCase() != (item.data.name).toLowerCase())
            curr.push(item);
        }
        curr.unshift({data});
        console.log(curr);
        localStorage.setItem('recent', JSON.stringify(curr));
      });
      this.router.navigateByUrl('/detail');
  }
}

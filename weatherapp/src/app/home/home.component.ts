import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
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
  constructor(private router: Router, private http: HttpClient,private loc:Location) {}
  ngOnInit(): void {
    this.time = new Date();
  }

  find(item: any) {
    this.http.get(`${API_URL}/weather?q=${item}&appid=${API_KEY}`).subscribe(
      (data) => {
        localStorage.setItem('city', JSON.stringify(item));
        window.location.reload();
      },
      (err) => {
        alert('city not found');
      }
    );
      // this.router.navigateByUrl("/detail",{skipLocationChange:true}).then(()=>{
      //   this.router.navigate([decodeURI(this.loc.path())]);
      // });
  }
}

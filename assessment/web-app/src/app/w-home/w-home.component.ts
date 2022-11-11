import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FavComponent } from '../fav/fav.component';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;
@Component({
  selector: 'app-w-home',
  templateUrl: './w-home.component.html',
  styleUrls: ['./w-home.component.css'],
})
export class WHomeComponent implements OnInit {
  place: any;
  display:boolean=false;
  Country:any;
  fav: any = true;
  val: any = 87;
  bagf = '';
  bagc = 'colorc';
  detail: any;
  pressure: any;
  temp: any;
  tempmin: any;
  tempmax: any;
  wind: any;
  visib: any;
  icon: any;
  tempf: any;
  tempc: any;
  humidity: any;
  favour:any;
  curc:any;
  constructor(private http: HttpClient) {}
  date = new Date();
  ngOnInit(): void {
    this.place = localStorage.getItem('city');
    this.place = JSON.parse(this.place);
    this.http
      .get(`${API_URL}/weather?q=${this.place}&appid=${API_KEY}`)
      .subscribe((data) => {
        this.detail = data;
        this.Country = this.detail['sys'].country;
        this.pressure = this.detail['main'].pressure;
        this.tempmin = (this.detail['main'].temp_min - 273.15).toFixed(0);
        this.tempmax = (this.detail['main'].temp_max - 273.15).toFixed(0);
        this.humidity = this.detail['main'].humidity;
        this.wind = this.detail['wind'].speed;
        this.visib = this.detail['visibility'];
        this.tempc = (this.detail['main'].temp - 273.15).toFixed(0);
        this.temp = this.tempc;
        this.tempf = (this.tempc * 9) / 5 + 32;

        this.icon = `http://openweathermap.org/img/wn/${this.detail['weather'][0].icon}@4x.png`;

        //  this.tempmax = this.detail['main'].temp_max;
      });
  }
  favadd() {
    this.fav = !this.fav;
    this.curc=localStorage.getItem('city');
    this.curc=JSON.parse(this.curc);
    console.log(this.curc);
    this.http.get(`${API_URL}/weather?q=${this.curc}&appid=${API_KEY}`).subscribe(data =>{
      console.log(data);
      this.favour=localStorage.getItem('favour');
      this.favour=JSON.parse(this.favour)||[];
      this.favour.unshift({data});
      localStorage.setItem('favour',JSON.stringify(this.favour));
      // this.route.navigate([''])
      // .then(()=>{
      //   window.location.reload();
      // })
      // this.route.navigate(['..'])  
      
      // this.route.navigate(['../']);
    });
    
  // }
  }

  favadded(){
    this.fav = !this.fav;
  }

  cel() {
    this.bagf = '';
    this.bagc = 'colorc';
    this.temp = this.tempc;
  }
  far() {
    this.bagf = 'colorf';
    this.bagc = '';
    this.temp = this.tempf;
  }

  ham(){
    this.display=!this.display;
  }
  
}

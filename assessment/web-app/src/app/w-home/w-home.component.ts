import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;
@Component({
  selector: 'app-w-home',
  templateUrl: './w-home.component.html',
  styleUrls: ['./w-home.component.css'],
})
export class WHomeComponent implements OnInit {
  place: any;
  display: boolean = false;
  searchOpen: boolean = false;
  Country: any;
  favColor = true;
  filled: boolean = false;
  notFilled: boolean = true;
  fav: any = true;
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
  favour: any;
  curc: any;
  values: any;
  constructor(private http: HttpClient, private route: Router) {}
  date = new Date();
  list: any;
  value: any;
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
        this.favour = localStorage.getItem('favour');
        this.favour = JSON.parse(this.favour);
        for (let val of this.favour) {
          if (val.data.name.toLowerCase() == this.place.toLowerCase()) {
            this.filled = true;
            this.notFilled = false;
          }
        }
      });

    //Yellow icon If in favourite
  }
  favadd() {
    this.filled = !this.filled;
    this.notFilled = !this.notFilled;

    this.curc = localStorage.getItem('city');
    this.curc = JSON.parse(this.curc);
    this.http
      .get(`${API_URL}/weather?q=${this.curc}&appid=${API_KEY}`)
      .subscribe((data) => {
        this.favour = localStorage.getItem('favour');
        this.favour = JSON.parse(this.favour) || [];

        this.favour.unshift({ data });
        localStorage.setItem('favour', JSON.stringify(this.favour));
      });
  }
  removefav() {
    this.filled = !this.filled;
    this.notFilled = !this.notFilled;
    this.favour = localStorage.getItem('favour');
    this.favour = JSON.parse(this.favour);
    this.curc = localStorage.getItem('city');
    this.curc = JSON.parse(this.curc);
    // console.log("Favour"+this.favour);
    console.log('curc ' + this.curc);
    let temp = [];
    for (let val of this.favour) {
      if (val.data.name.toLowerCase() != this.curc.toLowerCase()) {
        temp.push(val);
      }
      // temp.push(val.data)
    }
    localStorage.setItem('favour', JSON.stringify(temp));
    window.location.reload();
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

  ham() {
    this.display = !this.display;
  }

  iconColor() {
    return (this.favColor = !this.favColor);
  }
  open() {
    this.searchOpen = !this.searchOpen;
  }
  find(item: any) {
    let name = item;
    localStorage.setItem('city', JSON.stringify(name));
    this.http
      .get(`${API_URL}/weather?q=${name}&appid=${API_KEY}`)
      .subscribe((data) => {
        console.log(data);
        this.list = localStorage.getItem('list');
        this.list = JSON.parse(this.list) || [];
        this.list.unshift({ data });
        console.log(this.list);
        localStorage.setItem('list', JSON.stringify(this.list));
        this.route.navigate(['']).then(() => {
          window.location.reload();
        });
      });
  }
  handleS(e: any, item: any) {
    e.preventDefault();
    this.find(item);
  }

  handleKey(e: any, item: any) {
    if (e.keyCode == 13) {
      this.handleS(e, item);
    }
  }
}

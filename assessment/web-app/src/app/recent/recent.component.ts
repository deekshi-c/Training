import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
})
export class RecentComponent implements OnInit {
  fav: any = true;
  favour: any;
  curc: any;
  recent: any;
  filled: boolean = false;
  favList:any;
  notFilled: boolean = true;
  constructor(private route: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.recent = localStorage.getItem('list');
    this.recent = JSON.parse(this.recent);
    this.favour = localStorage.getItem('favdata');
    this.favour = JSON.parse(this.favour);
    // console.log(this.recent);
    if (localStorage.getItem('list')) {
      this.fav = true;
    } else this.fav = false;
  }

  option() {
    localStorage.removeItem('list');
    window.location.reload();
  }
  back() {
    this.route.navigateByUrl('/');
  }
  

  favadd(item: any) {
      console.log(item);
      
    this.filled = !this.filled;
    this.notFilled = !this.notFilled;
    this.http
      .get(`${API_URL}/weather?q=${item}&appid=${API_KEY}`)
      .subscribe((data) => {
        this.favour = localStorage.getItem('favour');
        this.favour = JSON.parse(this.favour) || [];
        this.favour.unshift({ data });
        localStorage.setItem('favour', JSON.stringify(this.favour));
      });
  }
  removefav(item: any) {
    console.log(item);
    this.filled = !this.filled;
    this.notFilled = !this.notFilled;
    this.favour = localStorage.getItem('favour');
    this.favour = JSON.parse(this.favour) || [];
    // console.log("Favour"+this.favour);
    let temp = [];
    for (let val of this.favour) {
      if (val.data.name.toLowerCase() != item.toLowerCase()) {
        temp.push(val);
      }
      // temp.push(val.data)
    }
    localStorage.setItem('favour', JSON.stringify(temp));
    window.location.reload();
  }
  check(data:any){
    this.favList = localStorage.getItem('favour')
    this.favList=JSON.parse(this.favList);
    for(let val of this.favList){
      if((data).toLowerCase() == (val.data.name).toLowerCase())
      {
        this.filled = true;
        this.notFilled = false;
        break;
      }
      else {

        this.filled = false;
        this.notFilled = true;
      }
        
    }
    
  }

 
}

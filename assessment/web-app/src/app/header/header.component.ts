import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
const API_KEY= environment.API_KEY;
const API_URL= environment.API_URL;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
date=new Date;
list:any;
value:any;
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  find(a:any){
    let name=a;
    console.log(a);
    localStorage.setItem('city',JSON.stringify(name));
    this.http.get(`${API_URL}/weather?q=${name}&appid=${API_KEY}`).subscribe(data =>{
      console.log(data);
      this.list=localStorage.getItem('list');
      this.list=JSON.parse(this.list)||[];
      this.list.unshift({data});
      console.log(this.list);
      localStorage.setItem('list',JSON.stringify(this.list));
      this.route.navigate([''])
      .then(()=>{
        window.location.reload();
      })
      // this.route.navigate(['..'])  
      
      // this.route.navigate(['../']);
      // console.log(window.location.href);
    });
    
  }

}

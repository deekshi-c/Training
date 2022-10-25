import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'http';
  user1: any;
  constructor(private userService: ServiceService) {}
  click() {
    this.userService.update();
  }


  del(){
    this.userService.delete(1).subscribe(x=>{
      console.log(x)
    })
  }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (x) => {
        this.user1 = x;
      },
      error: (err) => {
        alert('Cant access');
      },
    });
  }

  sendData(data: any) {
    this.userService.saveUser(data).subscribe((val) => {
      console.log(val);
    });
  }
}

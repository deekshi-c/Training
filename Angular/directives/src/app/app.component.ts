import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directives';
  flag = true;
  num: any;
  val = true;
  onclick() {
    this.val = !this.val;
  }
  click() {
    this.flag = !this.flag;
  }

  data = [
    { id: 1, name: 'John', location: 'NewYork' },
    { id: 2, name: 'Smith', location: 'Canada' },
    { id: 3, name: 'Martin', location: 'France' },
  ];
}

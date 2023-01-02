import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head2',
  templateUrl: './head2.component.html',
  styleUrls: ['./head2.component.css'],
})
export class Head2Component implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}
  search(a: any) {
    localStorage.setItem('item', JSON.stringify(a));
    this.router.navigate(['/photos']);
  }
  handleS(e: any, item: any) {
    e.preventDefault();
    this.search(item);
  }

  handleKey(e: any, item: any) {
    if (e.keyCode == 13) {
      this.handleS(e, item);
    }
  }
}

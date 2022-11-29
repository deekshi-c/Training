import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PexelService } from '../service/pexel.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  fav: any;
  constructor(public router: Router, private service: PexelService) {}

  display = true;
  ngOnInit(): void {
    this.fav = localStorage.getItem('fav');
    this.fav = JSON.parse(this.fav);
    console.log(this.fav);
  }
  getDetail(curr: any) {
    this.display = false;
    localStorage.setItem('current', JSON.stringify(curr));
    this.router.navigate(['/detail']);
     if (curr.image)  localStorage.setItem('type', JSON.stringify('video'));
     else localStorage.setItem('type', JSON.stringify('photo'));;
  }
  img(item: any) {
    if (item.image) return item.image;
    else return item.src.original;
  }
  name(item: any) {
    if (item.photographer) return item.photographer;
    else return item.user.name;
  }
  remove(item: any) {
    let curr: any = [];
    console.log(this.fav);

    console.log(this.fav);
    for (let data of this.fav) {
      if (data.id != item.id) {
        curr.push(data);
      }
    }
    console.log(curr);
    localStorage.setItem('fav', JSON.stringify(curr));
    window.location.reload();
  }
}

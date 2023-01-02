import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PexelService } from '../service/pexel.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  flag: any;
  constructor(public router: Router, private service: PexelService) {}
  display = true;
  search: any;
  photos: any;
  filled = false;
  fav: any;
  old: any;
  ngOnInit(): void {
    this.fav = localStorage.getItem('fav');
    this.fav = JSON.parse(this.fav) || [];
    this.search = localStorage.getItem('item');
    this.search = JSON.parse(this.search)|| " ";
    this.old = localStorage.getItem('old');
    this.old = JSON.parse(this.old);
    console.log(this.search + '---' + this.old);
    if (this.old == this.search) {
      this.photos = localStorage.getItem('photos');
      this.photos = JSON.parse(this.photos);
    } else {
      console.log('not equal');
      this.old = this.search;
      localStorage.setItem('old', JSON.stringify(this.old));
      console.log(this.old);
      this.service.getDataP(this.search).subscribe(
        (data) => {
          this.photos = data.photos;
          localStorage.setItem('photos', JSON.stringify(this.photos));
        },
        (err) => {
          alert('No Match found');
        }
      );
    }
    
  }
  getDetail(curr: any) {
    this.display = false;
    localStorage.setItem('current', JSON.stringify(curr));
    localStorage.setItem('type', JSON.stringify('photo'));
    this.router.navigate(['/detail']);
  }
  add(item: any) {
    this.filled = !this.filled;
    console.log(item);
    this.flag = 0;
    for (let data of this.fav) {
      if (data.id == item.id) {
        this.flag = 1;
        break;
      }
    }
    if (this.flag == 0) {
      this.fav.unshift(item);
      localStorage.setItem('fav', JSON.stringify(this.fav));
    }
  }

  remove(item: any) {
    this.filled = !this.filled;
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

  check(item: any) {
    this.flag = 0;
    for (let data of this.fav) {
      if (data.id == item.id) {
        this.flag = 1;
        break;
      }
    }
    if (this.flag == 1) this.filled = true;
    else this.filled = false;
  }
}

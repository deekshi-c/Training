import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PexelService } from '../service/pexel.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  fav: any;
  filled = false;
  constructor(public router: Router, private service: PexelService) {}
  display = true;
  flag: any;
  old:any
  search: any;
  videos: any;
  ngOnInit(): void {
    this.search = localStorage.getItem('item');
    this.search = JSON.parse(this.search).toLowerCase()||" ";
    this.fav = localStorage.getItem('fav');
    this.fav = JSON.parse(this.fav) || [];
    this.old = localStorage.getItem('old');
    this.old = JSON.parse(this.old);
    console.log(this.search + '---' + this.old);
    if (this.old == this.search) {
      this.videos = localStorage.getItem('videos');
      this.videos = JSON.parse(this.videos);
    } else{
            localStorage.setItem('old', JSON.stringify(this.old));
            this.service.getDataV(this.search).subscribe(
              (data) => {
                this.videos = data.videos;
                localStorage.setItem('videos', JSON.stringify(this.videos));
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
    localStorage.setItem('type', JSON.stringify('video'));
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

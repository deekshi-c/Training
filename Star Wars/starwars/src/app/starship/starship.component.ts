import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css'],
})
export class StarshipComponent implements OnInit {
  list = true;
  detail = false;
  details: any;
  names: any;
  nextpage: boolean = false;
  prepage: any = false;
  loading = true;
  notloading = false;
  constructor(
    private service: StarWarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    sessionStorage.removeItem('people');
    sessionStorage.removeItem('films');
    sessionStorage.removeItem('planets');
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('vehicle');
    if (sessionStorage.getItem('starship')) {
      this.details = JSON.parse(sessionStorage.getItem('starship') as any);
       this.loading = false;
       this.notloading = true;
    } else {
      this.service
        .getdetails('https://swapi.dev/api/starships')
        .subscribe((data) => {
          this.details = data;
           this.loading = false;
           this.notloading = true;
          console.log(data);
        });
    }
  }
  Onclick(data: any) {
    localStorage.setItem('details', JSON.stringify(data));
    this.router.navigate(['starshipdetails'], { relativeTo: this.route });
    this.list = false;
    this.detail = true;
  }
  next() {
    this.loading = true;
    this.notloading = false;
    this.service.getdetails(this.details?.next).subscribe((data) => {
      this.loading = false;
      this.notloading = true;
      this.details = data;
      sessionStorage.setItem('starship', JSON.stringify(this.details));
    });
  }
  previous() {
    this.loading = true;
    this.notloading = false;
    this.service.getdetails(this.details?.previous).subscribe((data) => {
      this.loading = false;
      this.notloading = true;
      this.details = data;
    });
  }
  display() {
    this.list = true;
    this.detail = false;
  }
  check() {
    if (this.details.next) this.nextpage = false;
    else this.nextpage = true;
    if (this.details.previous) this.prepage = false;
    else this.prepage = true;
  }
}
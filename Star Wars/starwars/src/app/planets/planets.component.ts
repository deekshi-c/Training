import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  list = true;
  detail = false;
  details: any;
  names: any;
  nextpage = false;
  prepage = true;
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
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicle');
    if (sessionStorage.getItem('planets')) {
      this.details = JSON.parse(sessionStorage.getItem('planets') as any);
      this.loading = false;
      this.notloading = true;
    } else {
      this.service
        .getdetails('https://swapi.dev/api/planets')
        .subscribe((data) => {
          this.details = data;
          console.log(data);
          this.loading = false;
          this.notloading = true;
        });
    }
  }

  Onclick(data: any) {
    localStorage.setItem('details', JSON.stringify(data));
    this.router.navigate(['planetdetails'], { relativeTo: this.route });
    this.list = false;
    this.detail = true;
  }
  next() {
    this.loading = true;
    this.notloading = false;
    this.service.getdetails(this.details?.next).subscribe((data) => {
      this.details = data;
      sessionStorage.setItem('planets', JSON.stringify(this.details));
      this.loading = false;
      this.notloading = true;
    });
  }
  previous() {
    this.loading = true;
    this.notloading = false;
    this.service.getdetails(this.details?.previous).subscribe((data) => {
      this.details = data;
      sessionStorage.setItem('planets', JSON.stringify(this.details));
      this.loading = false;
      this.notloading = true;
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


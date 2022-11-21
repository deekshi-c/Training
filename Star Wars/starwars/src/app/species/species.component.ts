import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
})
export class SpeciesComponent implements OnInit {
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
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicle');
    console.log('init');
    if (sessionStorage.getItem('species')) {
      this.details = JSON.parse(sessionStorage.getItem('species') as any);
      this.loading = false;
      this.notloading = true;
    } else {
      this.service
        .getdetails('https://swapi.dev/api/species')
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
    this.router.navigate(['speciesdetails'], { relativeTo: this.route });
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
      sessionStorage.setItem('species', JSON.stringify(this.details));
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

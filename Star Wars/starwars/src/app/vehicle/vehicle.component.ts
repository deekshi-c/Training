import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
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
    sessionStorage.removeItem('starship');
    console.log('init');
    if (sessionStorage.getItem('vehicle')) {
      this.details = JSON.parse(sessionStorage.getItem('veh') as any);
      this.loading = false;
      this.notloading = true;
    } else {
      this.service
        .getdetails('https://swapi.dev/api/vehicles')
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
    this.router.navigate(['vehicledetails'], { relativeTo: this.route });
    this.list = false;
    this.detail = true;
  }
  next() {
    this.loading = true;
    this.notloading = false;
    this.service.getdetails(this.details?.next).subscribe((data) => {
      this.details = data;
      sessionStorage.setItem('vehicle', JSON.stringify(this.details));
      this.loading = false;
      this.notloading = true;
    });
  }
  previous() {
    this.loading = true;
    this.notloading = false;
    this.service.getdetails(this.details?.previous).subscribe((data) => {
      this.details = data;
      sessionStorage.setItem('vehicle', JSON.stringify(this.details));
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
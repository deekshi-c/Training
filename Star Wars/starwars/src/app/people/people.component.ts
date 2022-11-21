import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  list = true;
  detail = false;
  details: any;
  names: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
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
    sessionStorage.removeItem('planets');
    sessionStorage.removeItem('films');
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicle');
    console.log('Inside');
    if (sessionStorage.getItem('people')) {
      this.details = JSON.parse(sessionStorage.getItem('people') as any);
      this.loading = false;
      this.notloading = true;
    } else {
      this.service
        .getdetails('https://swapi.dev/api/people')
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
    this.router.navigate(['display'], { relativeTo: this.route });
    this.list = false;
    this.detail = true;
  }
  next() {
     this.loading = true;
     this.notloading = false;
    this.service.getdetails(this.details?.next).subscribe((data) => {
      this.details = data;
      this.loading = false;
      this.notloading = true;
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

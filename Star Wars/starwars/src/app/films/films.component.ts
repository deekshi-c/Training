import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  list = true;
  detail = false;
  details: any;
  names: any;
  nextpage: boolean = false;
  prepage: any = true;
  loading=true;
  notloading=false;
  constructor(private service: StarWarsService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    sessionStorage.removeItem('people');
    sessionStorage.removeItem('planets');
    sessionStorage.removeItem('species');
    sessionStorage.removeItem('starship');
    sessionStorage.removeItem('vehicle');
    console.log('Inside');
    if (sessionStorage.getItem('films')) {
      this.details = JSON.parse(sessionStorage.getItem('films') as any);
      this.loading = false;
      this.notloading = true;
      this.loading = false;
      this.notloading = true;
    } else {
      this.service
        .getdetails('https://swapi.dev/api/films')
        .subscribe((data) => {
          this.details = data;
          console.log(this.details);
          this.loading=false;
          this.notloading=true;
        });
    }
  }

  Onclick(data: any) {
    localStorage.setItem('details', JSON.stringify(data));
    this.router.navigate(['filmdetail'], { relativeTo: this.route });
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
      sessionStorage.setItem('films', JSON.stringify(this.details));
    });
  }
  previous() {
      this.loading = true;
      this.notloading = false;
    this.service.getdetails(this.details?.previous).subscribe((data) => {
        this.loading = false;
        this.notloading = true;
      this.details = data;
      sessionStorage.setItem('films', JSON.stringify(this.details));
    });
  }
  display(){
    this.list = true;
    this.detail = false;
  }
  check() {
    if (this.details.next) this.nextpage = false;
    else this.nextpage = true;
    if (this.details.previous) this.prepage = false;
    else this.prepage = true;
  }
  // goBack(){
  //       this.list = true;
  //       this.detail = false;
    
  // }
}
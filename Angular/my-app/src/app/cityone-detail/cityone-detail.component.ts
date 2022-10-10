import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-cityone-detail',
  templateUrl: './cityone-detail.component.html',
  styleUrls: ['./cityone-detail.component.css'],
})
export class CityoneDetailComponent implements OnInit {
  public depId: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.depId = id;
    });
  }
  goPrev() {
    let prevId = parseInt(this.depId) - 1;
    this.router.navigate(['/cityone', prevId]);
  }
  goNext() {
    let nextId = parseInt(this.depId) + 1;
    this.router.navigate(['/cityone', nextId]);
  }

  goBack() {
    let selectedId = this.depId ? this.depId : null;
    this.router.navigate(['/cityone', { id: selectedId }]);
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}


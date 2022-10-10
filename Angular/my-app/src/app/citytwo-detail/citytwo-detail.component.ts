import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-citytwo-detail',
  templateUrl: './citytwo-detail.component.html',
  styleUrls: ['./citytwo-detail.component.css'],
})
export class CitytwoDetailComponent implements OnInit {
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
    this.router.navigate(['/citytwo', prevId]);
  }
  goNext() {
    let nextId = parseInt(this.depId) + 1;
    this.router.navigate(['/citytwo', nextId]);
  }
  goBack() {
    let selectedId = this.depId ? this.depId : null;
    this.router.navigate(['/citytwo', {id:selectedId}]);
  }
}


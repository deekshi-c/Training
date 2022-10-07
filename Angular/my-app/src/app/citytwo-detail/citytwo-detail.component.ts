import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-citytwo-detail',
  templateUrl: './citytwo-detail.component.html',
  styleUrls: ['./citytwo-detail.component.css'],
})
export class CitytwoDetailComponent implements OnInit {
  public depId: any;
  public depName: any;
  public depCity: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(){
    let id =this.route.snapshot.paramMap.get('id');
    this.depId=id;

    let id2 = this.route.snapshot.paramMap.get('name');
    this.depName = id2;
    let id3 =this.route.snapshot.paramMap.get('detail');
    this.depCity=id3;
  }
}

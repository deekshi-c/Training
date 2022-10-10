import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { parse } from 'path';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-city-two',
  templateUrl: './city-two.component.html',
  styleUrls: ['./city-two.component.css'],
})
export class CityTwoComponent implements OnInit {
  departments = [
    {
      id: '1',
      name: 'Chhatarpur Temple',
      detail: '1 km from Chhatarpur Metro Station',
    },
    {
      id: '2',
      name: 'Mehrauli Archaeological Parke',
      detail: 'Anuvrat Marg Opposite Qutub Minar Metro Station',
    },
    {
      id: '3',
      name: 'Crafts Museum',
      detail: 'Bhairon Rd,Neighbourhood Nizamuddin',
    },
  ];
  public selectedId: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  onSelect(dep: any) {
    this.router.navigate(['/citytwo', dep.id]);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.selectedId = id;
    });
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }
}








// public departmentId: any ;
  //   constructor(private route: ActivatedRoute, private router: Router) {}

  //   ngOnInit() {
  //     //let id = parseInt(this.route.snapshot.paramMap.get('id'));
  //     this.route.paramMap.subscribe((params: ParamMap) => {
  //       let id = params.get('id');
  //       this.departmentId = id;
  //     });
  //   }

  //   goPrevious() {
  //     let previousId = this.departmentId - 1;
  //     this.router.navigate(['/cityone', previousId]);
  //   }
  //   goNext() {
  //     let previousId = parseInt(this.departmentId) + 1;
  //     this.router.navigate(['/cityone'
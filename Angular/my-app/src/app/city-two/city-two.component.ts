import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-two',
  templateUrl: './city-two.component.html',
  styleUrls: ['./city-two.component.css'],
})
export class CityTwoComponent implements OnInit {
  departments = [
    {
      id: 1,
      name: 'Chhatarpur Temple',
      detail: '1 km from Chhatarpur Metro Station'
    },
    {
      id: 2,
      name: 'Mehrauli Archaeological Parke',
      detail: 'Anuvrat Marg Opposite Qutub Minar Metro Station'
    },
    {
      id: 3,
      name: 'Crafts Museum',
      detail: 'Bhairon Rd,Neighbourhood Nizamuddin'
    },
  ];
  constructor(private router: Router) {}

  onSelect(dep: any){
    this.router.navigate(['/cityone', dep.id, dep.name, dep.detail]);
    console.log("click");
    
  }

  ngOnInit(): void {}
}

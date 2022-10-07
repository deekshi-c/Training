import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-city-one',
  templateUrl: './city-one.component.html',
  styleUrls: ['./city-one.component.css'],
})
export class CityOneComponent implements OnInit {
  departments = [
    {
      'id': '1',
      'name': 'Kanheri Caves',
      detail:
        ' Sanjay Gandhi National Park, on the former island of Salsette in the western outskirts',
    },
    {
      'id': '2',
      'name': 'Marine Drive',
      'detail': 'Netaji Subhash Chandra Bose Road',
    },
    {
      'id': '3',
      'name': 'Bandra-Worli Sea Link',
      'detail':
        'Bandra in the Western Suburbs of Mumbai with Worli in South Mumbai.',
    },
  ];
  constructor(private router: Router) {}

  onSelect(dep: any) {
    this.router.navigate(['/cityone',dep.id]);
    console.log('click');
  }
  ngOnInit(): void {}
}

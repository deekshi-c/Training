import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul>
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span> {{ department.name }} {{ department.id }}</span>
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(department: any) {
    this.router.navigate(['/departments', department.id]);
  }
}

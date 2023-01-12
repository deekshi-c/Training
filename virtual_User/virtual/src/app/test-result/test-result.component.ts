import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test/test.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css'],
})
export class TestResultComponent implements OnInit {
  solutions: any;
  displayAll = true;
  index: any;
  constructor(private service: TestService) {}

  ngOnInit(): void {
    this.service.testResult().subscribe((data) => {
      this.solutions = data;
      console.log(this.solutions);
      console.log(this.solutions.selectedAndActualAnswerSet[0][1]);
      this.index = sessionStorage.getItem('index');
      console.log(this.index);
    });
  }
}

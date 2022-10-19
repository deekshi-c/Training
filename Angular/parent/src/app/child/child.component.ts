import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() p3Data: any;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  constructor(private cont: ServiceService) {}

  @Input() pData: any;
  news = 'From Child 1';
  ngOnInit(): void {}

  onClick(data: any) {
    this.parentFunction.emit(data);
  }

  send(data: any) {
    this.cont.update(data);
  }
}

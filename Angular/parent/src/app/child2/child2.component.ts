import { Component, OnInit, Input, Output, EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnChanges {
  text = '';
  message: string | undefined;
  @Input() loggedIn: boolean | undefined;
  @Input() p2Data: any;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  //   get loggedIn() {
  //     return this._loggedIn;
  //   }
  // @Input()
  //   set loggedIn(value: boolean) {
  //     this._loggedIn = value;
  //     if(value==true) {
  //       this.message="Hello User";
  //   }
  //     else{
  //       this.message="Signed Out";
  //     }
  // }
  constructor(private out: ServiceService) {}
  ngOnInit() {
    this.out.recieve.subscribe((value) => (this.text = value));
  }
  onClick(data: any) {
    this.parentFunction.emit(data);
  }

  ngOnChanges(change: SimpleChanges) {
    let datas = change['loggedIn'];
    if (datas.currentValue == true) this.message = 'Hello User';
    else this.message = 'Signed Out';
  }
}

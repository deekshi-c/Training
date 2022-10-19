import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'parent';
  data1: any = '';
  // @ViewChild('ref') eleref:ElementRef;
  data2: any
  val="";
  data = {
    name: '',
    age: '',
    email: '',
  };
  uLoggedIn =true;

  // ngAfterViewInit() {
  //   this.eleref.nativeElement.focus();
  // }
  parentFunction(value: any) {
    this.data1 = value;
  }
  parentFunction2(value1: any) {
    this.val = value1;
    console.log(this.val);
    
  }

  onClick(d1: string, d2: string, d3: string) {
    this.data.name = d1;
    this.data.age = d2;
    this.data.email = d3;
  }
}

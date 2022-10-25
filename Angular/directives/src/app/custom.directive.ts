import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ref:ElementRef) { 
    ref.nativeElement.style.color='brown';
    ref.nativeElement.style.fontSize= '40px';
    ref.nativeElement.style.textAlign='center';
  }

}

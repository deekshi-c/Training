import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @HostBinding('style.backgroundColor') color: string | undefined;
  constructor() {}
  @HostListener('mouseenter') enterMouse() {
    this.color = '#ff9966';
  }

  @HostListener('mouseleave') leaveMouse() {
    this.color = '#ffbb99';
  }

  @HostListener('onclick') click() {
    this.color = '#ff9966';
    
  }

  ngOnInit() {
    this.color = '#ffbb99';
  }
}

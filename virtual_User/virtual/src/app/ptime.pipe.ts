import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ptime',
})
export class PtimePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    let totalSeconds = value;
    let hrs = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let mins = Math.floor(totalSeconds / 60);
    let sec = Math.floor(totalSeconds % 60);

    let completeDuration;
    if (hrs <= 0) {
      if (mins <= 0 ) {
        return sec + 'sec';
      }
      else return mins + 'min ' + sec + 'sec';
    } 
    else {
      return hrs + '.' + mins + 'h ' + sec + 'sec';
    }
  }
}

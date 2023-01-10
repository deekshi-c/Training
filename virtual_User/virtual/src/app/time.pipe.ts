import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    let totalSeconds = value;
    let hrs = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let mins = Math.floor(totalSeconds / 60);
    let sec = totalSeconds % 60;

    let completeDuration;
    if (hrs <= 0) {
      return mins + 'min ' + sec + 'sec';
    } else {
      return hrs + '.' + mins + 'h ' + sec + 'sec';
    }
  }
}

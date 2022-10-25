import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string): string {
    let arr = value.split('').reverse();

    return "Reverse of String is " + arr.join('');
  }

}

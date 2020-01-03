import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit35',
})
export class Limit35Pipe implements PipeTransform {

  transform(value: string, ...args) {
    if(value.length >35)
      return value.substring(0,35)+'...';
    else{
      return value
    }
  }
}

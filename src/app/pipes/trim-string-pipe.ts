import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimString'
})
export class TrimStringPipe implements PipeTransform {

  transform(value: string,limit:number,showAll:boolean, ...args: unknown[]): unknown {

    if(!value) return '';

    const words = value.trim().split(/\s+/);
    if(showAll || words.length <=limit) return value;

    return words.slice(0,limit).join(' ') + '...';
  }

}

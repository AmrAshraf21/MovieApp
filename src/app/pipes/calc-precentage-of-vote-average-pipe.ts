import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcPrecentageOfVoteAverage'
})
export class CalcPrecentageOfVoteAveragePipe implements PipeTransform {

  transform(value:number, ...args: unknown[]): unknown {
    

    if(!value) return;

    return Math.round((value / 10) * 100);
  }

}

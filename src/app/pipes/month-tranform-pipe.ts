import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthTranform'
})
export class MonthTranformPipe implements PipeTransform {

  transform(dateStr: string, ...args: unknown[]): unknown {
 if (!dateStr) return '';

    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${monthName} ${day}, ${year}`;
    }

}

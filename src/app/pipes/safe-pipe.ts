import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  private santilizer = inject(DomSanitizer);
  transform(url: string, ...args: unknown[]): unknown {
    return this.santilizer.bypassSecurityTrustResourceUrl(url);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thienth'
})
export class ThienthPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

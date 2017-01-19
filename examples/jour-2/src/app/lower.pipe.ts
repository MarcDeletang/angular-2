import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lower'
})
export class LowerPipe implements PipeTransform {

  transform(value: string, ...args): string {
  	if (args.length)
  		console.log(args)
    return value.toLowerCase()
  }

}

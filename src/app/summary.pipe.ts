import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any,start:number=0,end:number=30) {
    let temp =(<string> value);
    return (temp.substring(start,end)+'...');
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value, ...sortArray: string[]) {
    if (value == undefined) return value;
    let data = [];
    if (sortArray[0] == 'normal') {
      for (let i = 0; i < value.length; i++) {
        if (value[i].save == false) data.push(value[i]);
      }
      return data;
    } else if (sortArray[0] == 'date') {
      if (sortArray[1] == '' || sortArray[2] == '') return null;
      for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value[i].result.length; j++) {
          if (new Date(value[i].result[j].result1).getTime() <= new Date(sortArray[2]).getTime() && new Date(value[i].result[j].result1).getTime() >= new Date(sortArray[1]).getTime()) {
            data.push(value[i]);
            break;
          }
        }
      }
      return data;
    } else if (sortArray[0] == 'save') {
      for (let i = 0; i < value.length; i++) {
        if (value[i].save == true) data.push(value[i]);
      }
      return data;
    } else return null;
  }
}

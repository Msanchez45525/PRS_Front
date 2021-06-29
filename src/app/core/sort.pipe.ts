import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], column: string = "id", isAsc: boolean = true): any[] {
    // x & y normalize data
    let sortFn = (a: any, b: any): number => {
      let x = (typeof a[column] === "number") ? a[column] : a[column.toString().toLowerCase()];
      let y = (typeof b[column] === "number") ? b[column] : b[column.toString().toLowerCase()];
      let sortResult = 0;
      //block below runs the test and orders based on the value. Ascending sequence
      if (x === y) {
        return 0;
      } if (x > y) {
        sortResult = 1;
      }
      else {
        sortResult = -1;
      }
      // for descending sequence
      if (isAsc === false) {  
        sortResult *= -1;
      }
        return sortResult;
        
    }

    return items.sort(sortFn);
  }

}

import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isJoinFilter'
})
export class IsJoinFilterPipe implements PipeTransform {

  transform(array: any[], query: any): any {
    if (query) {
      return _.filter(array, row=>(
          row.isJoin == query
      ));
    }
    return array;
  }
}

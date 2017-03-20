import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPlayFilter'
})
export class IsPlayFilterPipe implements PipeTransform {

  transform(array: any[], query: any): any {
      return _.filter(array, row=>(
        (row.dualValue.lower <= query+1) && (row.dualValue.upper >= query+1)
      ));
  }
}

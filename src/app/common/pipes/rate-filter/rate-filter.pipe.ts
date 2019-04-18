import {Pipe, PipeTransform} from '@angular/core';
import {Hotel} from '../../../_shared/interfaces';

@Pipe({
  name: 'rateFilter'
})
export class RateFilterPipe implements PipeTransform {

  transform(value: Hotel[], filter: string): Hotel[] {
    let filteredValue: Hotel[];
    if (filter === 'rate') {
      filteredValue = value.sort((a, b) => {
        return b.hotel_rate - a.hotel_rate;
      });
    } else if (filter === 'name') {
      filteredValue = value.sort(function (a, b) {
        if (a.hotel_title < b.hotel_title) {
          return -1;
        }
        if (a.hotel_title > b.hotel_title) {
          return 1;
        }
        return 0;
      });
    }
    // filteredValue = value.filter(hotel => hotel.hotel_rate > rate);

    return filteredValue;
  }

}

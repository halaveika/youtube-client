import { Pipe, PipeTransform } from '@angular/core';
import { ASC, DESC } from '../shared/constans';
import { SearchItem } from './../models/search-item.model';

@Pipe({
  name: 'countSort'
})
export class CountSortPipe implements PipeTransform {

  transform(items: SearchItem[], sort: string = ''):SearchItem[] {
    if (sort === ASC ) {
      return items.sort((a,b) => (Number.parseInt(a.statistics.viewCount) > Number.parseInt(b.statistics.viewCount)) ? 1 : (Number.parseInt(b.statistics.viewCount) > Number.parseInt(a.statistics.viewCount) ? -1 : 0))

    }
      else if (sort === DESC) {
        return items.sort((a,b) => (Number.parseInt(a.statistics.viewCount) > Number.parseInt(b.statistics.viewCount)) ? -1 : (Number.parseInt(b.statistics.viewCount) > Number.parseInt(a.statistics.viewCount) ? 1 : 0))
      }
    return items;
  }

}

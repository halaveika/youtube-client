import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '@core/models/search-item.model';
import { ASC, DESC } from '@shared/constans';

@Pipe({
  name: 'countSort',
})
export class CountSortPipe implements PipeTransform {
  transform(items: SearchItem[], sort: string = ''):SearchItem[] {
    if (sort === ASC) {
      return items.sort((a, b) => ((Number.parseInt(a.statistics.viewCount, 10)
      > Number.parseInt(b.statistics.viewCount, 10))
        ? 1 : (Number.parseInt(b.statistics.viewCount, 10) > Number.parseInt(a.statistics.viewCount, 10) ? -1 : 0)));
    }
    if (sort === DESC) {
      return items.sort((a, b) => ((Number.parseInt(a.statistics.viewCount, 10)
      > Number.parseInt(b.statistics.viewCount, 10))
        ? -1 : (Number.parseInt(b.statistics.viewCount, 10) > Number.parseInt(a.statistics.viewCount, 10) ? 1 : 0)));
    }
    return items;
  }
}

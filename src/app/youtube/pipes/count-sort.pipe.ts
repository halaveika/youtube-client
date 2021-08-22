import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '@app/youtube/models/i-search-item';
import { ASC, DESC } from '@shared/constans';

@Pipe({
  name: 'countSort',
})
export class CountSortPipe implements PipeTransform {
  transform(items: ISearchItem[], sort: string = ''):ISearchItem[] {
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

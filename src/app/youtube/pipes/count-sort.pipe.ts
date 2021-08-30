import { Pipe, PipeTransform } from '@angular/core';
import { ASC, DESC } from '@app/shared/constansts';
import { ISearchItem } from '@shared/models/i-search-item';

@Pipe({
  name: 'countSort',
})
export class CountSortPipe implements PipeTransform {
  transform(items: ISearchItem[], sort: string = ''): ISearchItem[] {
    const viewCount = (item: ISearchItem) => +item.statistics.viewCount;
    if (sort === ASC) {
      return items.sort((a, b) => (viewCount(a) > viewCount(b) ? 1 : viewCount(a) < viewCount(b) ? -1 : 0));
    } else if (sort === DESC) {
      return items.sort((a, b) => (viewCount(a) > viewCount(b) ? -1 : viewCount(a) < viewCount(b) ? 1 : 0));
    } else {
      return items;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { ASC, DESC } from '@app/shared/constansts';
import { ISearchItem } from '@shared/models/i-search-item';

@Pipe({
  name: 'dataSort',
})
export class DataSortPipe implements PipeTransform {
  transform(items: ISearchItem[], sort: string = ''): ISearchItem[] {
    const publishedAt = (item: ISearchItem) => Date.parse(item.snippet.publishedAt);
    if (sort === ASC) {
      return items.sort((a, b) => (publishedAt(a) > publishedAt(b) ? 1 : publishedAt(a) < publishedAt(b) ? -1 : 0));
    } else if (sort === DESC) {
      return items.sort((a, b) => (publishedAt(a) > publishedAt(b) ? -1 : publishedAt(a) < publishedAt(b) ? 1 : 0));
    } else {
      return items;
    }
  }
}

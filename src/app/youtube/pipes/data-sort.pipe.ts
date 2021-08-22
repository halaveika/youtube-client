import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '@app/youtube/models/i-search-item';
import { ASC, DESC } from '@shared/constans';

@Pipe({
  name: 'dataSort',
})
export class DataSortPipe implements PipeTransform {
  transform(items: ISearchItem[], sort: string = ''):ISearchItem[] {
    if (sort === ASC) {
      return items.sort((a, b) => ((Date.parse(a.snippet.publishedAt) > Date.parse(b.snippet.publishedAt))
        ? 1 : (Date.parse(b.snippet.publishedAt) > Date.parse(a.snippet.publishedAt) ? -1 : 0)));
    }
    if (sort === DESC) {
      return items.sort((a, b) => ((Date.parse(a.snippet.publishedAt) > Date.parse(b.snippet.publishedAt))
        ? -1 : (Date.parse(b.snippet.publishedAt) > Date.parse(a.snippet.publishedAt) ? 1 : 0)));
    }
    return items;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { ASC, DESC } from '../shared/constans';
import { SearchItem } from './../models/search-item.model';

@Pipe({
  name: 'dataSort'
})
export class DataSortPipe implements PipeTransform {

  transform(items: SearchItem[], sort: string = ''):SearchItem[] {
    if (sort === ASC ) {
      return items.sort((a,b) => (Date.parse(a.snippet.publishedAt) > Date.parse(b.snippet.publishedAt)) ? 1 : (Date.parse(b.snippet.publishedAt) > Date.parse(a.snippet.publishedAt) ? -1 : 0))

    }
      else if (sort === DESC) {
        return items.sort((a,b) => (Date.parse(a.snippet.publishedAt) > Date.parse(b.snippet.publishedAt)) ? -1 : (Date.parse(b.snippet.publishedAt) > Date.parse(a.snippet.publishedAt) ? 1 : 0))
      }
    return items;
  }

}

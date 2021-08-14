import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from './../models/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: SearchItem[], filterPattern: string = ''):SearchItem[] {
    const pattern = filterPattern.toLowerCase().trim();
    return items.filter(item => item.snippet.title.slice(0, pattern.length).toLowerCase() === pattern);
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '@app/youtube/models/i-search-item';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: ISearchItem[], filterPattern: string = ''):ISearchItem[] {
    const pattern = filterPattern.toLowerCase().trim();
    return items.filter((item) => item.snippet.title.slice(0, pattern.length).toLowerCase() === pattern);
  }
}

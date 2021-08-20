import { Component } from '@angular/core';
import { YoutubeService } from '@app/core/services/youtube.service';
import { SearchItem } from '@core/models/search-item.model';
import { FilterService } from '@core/services/filter.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  public searchItemsArr:SearchItem[] = [];

  public sortDataValue = '';

  public sortCountValue = '';

  public filterPattern = '';

  constructor(private youtubeService: YoutubeService, private  filterService:FilterService ) {
    this.youtubeService.searchItemsData$.subscribe((items) => { this.searchItemsArr = items; return true; });
    this.filterService.sortDataValue$.subscribe((value) => { this.sortDataValue = value; return true; });
    this.filterService.sortCountValue$.subscribe((value) => { this.sortCountValue = value; return true; });
    this.filterService.filterPattern$.subscribe((value) => { this.filterPattern = value; return true; });
  }
}

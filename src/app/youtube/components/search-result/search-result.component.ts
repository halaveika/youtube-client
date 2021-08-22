import { Component } from '@angular/core';
import { ISearchItem } from '@app/youtube/models/i-search-item';
import { FilterService } from '@core/services/filter.service';
import { YoutubeHttpService } from '@youtube/services/youtube-http.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  public searchItemsArr:ISearchItem[] = [];

  public sortDataValue = '';

  public sortCountValue = '';

  public filterPattern = '';

  constructor(private youtubeHttpService: YoutubeHttpService, private filterService:FilterService) {
    this.youtubeHttpService.searchItemsData$.subscribe((items) => { this.searchItemsArr = items; return true; });
    this.filterService.sortDataValue$.subscribe((value) => { this.sortDataValue = value; return true; });
    this.filterService.sortCountValue$.subscribe((value) => { this.sortCountValue = value; return true; });
    this.filterService.filterPattern$.subscribe((value) => { this.filterPattern = value; return true; });
  }
}

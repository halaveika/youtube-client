import { Component } from '@angular/core';
import { ISearchItem } from '@app/youtube/models/i-search-item';
import { FilterService } from '@core/services/filter.service';
import { YoutubeHttpService } from '@youtube/services/youtube-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  public filterPattern: Observable<string>;

  public searchItemsArr: Observable<ISearchItem[]>;

  public sortCountValue: Observable<string>;

  public sortDataValue: Observable<string>;

  constructor(private youtubeHttpService: YoutubeHttpService,
    private filterService:FilterService) {
    this.filterPattern = this.filterService.filterPattern$;
    this.searchItemsArr = this.youtubeHttpService.searchItemsData$;
    this.sortCountValue = this.filterService.sortCountValue$;
    this.sortDataValue = this.filterService.sortDataValue$;
  }
}

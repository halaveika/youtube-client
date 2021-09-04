import { Component, OnInit } from '@angular/core';
import { selectCardList } from '@app/redux/selectors/card.selector';
import { IAppState } from '@app/redux/state/app.state';
import { FilterService } from '@core/services/filter.service';
import { select, Store } from '@ngrx/store';
import { ISearchItem } from '@shared/models/i-search-item';
import { ICardData } from '@shared/models/ICardData';
import { YoutubeHttpService } from '@youtube/services/youtube-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  public filterPattern: Observable<string>;

  public searchItemsArr: Observable<ISearchItem[]>;

  public sortCountValue: Observable<string>;

  public sortDataValue: Observable<string>;

  public cardDataArr$: Observable<ICardData[]> = this.store.pipe(select(selectCardList));

  constructor(private youtubeHttpService: YoutubeHttpService,
    private filterService:FilterService, private store: Store<IAppState>) {
    this.filterPattern = this.filterService.filterPattern$;
    this.searchItemsArr = this.youtubeHttpService.searchItemsData$;
    this.sortCountValue = this.filterService.sortCountValue$;
    this.sortDataValue = this.filterService.sortDataValue$;
  }

  ngOnInit() {

  }
}

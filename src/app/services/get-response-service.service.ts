import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';
import MockResponse from '../shared/mockData/mockYoutubeResponse.json';

@Injectable({
  providedIn: 'root',
})
export class GetResponseService {
  private searchPattern = '';

  private response: SearchResponse | null = null;

  private searchItemsData = new BehaviorSubject<SearchItem[]>([]);

  public searchItemsData$: Observable<SearchItem[]>;

  constructor(@Optional() @SkipSelf() parent?: GetResponseService) {
    this.searchItemsData$ = this.searchItemsData.asObservable();
    if (parent) {
      throw Error(
        `[GetResponseService]: trying to create multiple instances,
      but this service should be a singleton.`,
      );
    }
  }

  getResponse(pattern:string): BehaviorSubject<SearchItem[]> {
    this.searchPattern = pattern;
    if (!pattern.trim()) {
      this.response = null;
      this.searchItemsData.next([]);
      return this.searchItemsData;
    }
    this.response = MockResponse;
    this.searchItemsData.next(this.response.items);
    return this.searchItemsData;
  }
}

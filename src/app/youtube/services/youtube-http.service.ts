import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_YOUTUBE_LIST, URL_YOUTUBE_VIDEO } from '@app/shared/constans';
import { ISearchItem } from '@app/youtube/models/i-search-item.model';
import { SearchService } from '@core/services/search.service';
import { ISearchResponse } from '@youtube/models/i-search-response.model';
import { IVideoResponse } from '@youtube/models/i-video-response.model';
import {
  BehaviorSubject, Observable, of, throwError,
} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class YoutubeHttpService {
  private searchPattern = new BehaviorSubject<string>('');

  private searchPattern$: Observable<string>;

  private searchItemsData = new BehaviorSubject<ISearchItem[]>([]);

  public searchItemsData$: Observable<ISearchItem[]>;

  constructor(private searchService:SearchService, private http: HttpClient) {
    this.searchItemsData$ = this.searchItemsData.asObservable();
    this.searchPattern$ = this.searchPattern.asObservable();
    this.searchService.searchPattern$.subscribe((pattern) => { this.searchPattern.next(pattern); return true; });
    this.searchPattern$
      .subscribe((pattern) => this.getYoutubeResponse(pattern)
        .subscribe((items) => this.searchItemsData.next(items)));
  }

  getYoutubeResponse(pattern: string): Observable<ISearchItem[]> {
    if (!pattern) { return of([]); }
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('type', 'video')
      .set('q', pattern);
    return this.http.get<ISearchResponse>(URL_YOUTUBE_LIST, { params })
      .pipe(
        map((searchResponse:ISearchResponse) => {
          const videoId:string = searchResponse.items.map((item) => item.id.videoId).join(',');
          return videoId;
        }),
        mergeMap((videoId) => {
          const params2 = new HttpParams()
            .set('id', videoId)
            .set('part', 'snippet,statistics');
          return this.http.get<IVideoResponse>(URL_YOUTUBE_VIDEO, { params: params2 })
            .pipe(
              map((videoResponse:IVideoResponse) => videoResponse.items),
            );
        }),
        catchError((error) => {
          throwError(error);
          return [];
        }),
      );
  }

  getCurrentItem(id:string):ISearchItem | null {
    let currentItem:ISearchItem | null = null;
    this.searchItemsData$
      .subscribe((items) => { currentItem = items.find((item) => item.id === id) as ISearchItem; return true; });
    return currentItem;
  }
}

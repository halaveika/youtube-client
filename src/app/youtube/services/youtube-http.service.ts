import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SEARCH, URL_VIDEOS } from '@app/shared/constansts';
import { ISearchItem } from '@app/youtube/models/i-search-item';
import { SearchService } from '@core/services/search.service';
import { ISearchResponse } from '@youtube/models/i-search-response.model';
import { IVideoResponse } from '@youtube/models/i-video-response.model';
import {
  BehaviorSubject, Observable, of, throwError,
} from 'rxjs';
import {
  catchError, map, mergeMap, tap,
} from 'rxjs/operators';

@Injectable()
export class YoutubeHttpService {
  private searchPattern = new BehaviorSubject<string>('');

  private searchPattern$: Observable<string>;

  private searchItemsData = new BehaviorSubject<ISearchItem[]>([]);

  public searchItemsData$: Observable<ISearchItem[]>;

  constructor(private searchService:SearchService, private http: HttpClient) {
    this.searchItemsData$ = this.searchItemsData.asObservable();
    this.searchPattern$ = this.searchPattern.asObservable();
    this.searchService.searchPattern$.pipe(tap((pattern) => this.searchPattern.next(pattern))).subscribe();
    this.searchPattern$.pipe(
      tap((pattern) => this.getYoutubeResponse(pattern).subscribe((items) => this.searchItemsData.next(items))),
    ).subscribe();
  }

  getYoutubeResponse(pattern: string): Observable<ISearchItem[]> {
    if (!pattern) {
      return of([]);
    }
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('type', 'video')
      .set('q', pattern);
    return this.http.get<ISearchResponse>(URL_SEARCH, { params }).pipe(
      map((searchResponse: ISearchResponse) => searchResponse.items.map((item) => item.id.videoId).join(',')),
      mergeMap((videoId: string) => this.getYoutubeVideos(videoId)),
      catchError((error) => {
        throwError(error);
        return [];
      }),
    );
  }

  private getYoutubeVideos(videoId: string): Observable<ISearchItem[]> {
    const params = new HttpParams()
      .set('id', videoId)
      .set('part', 'snippet,statistics');
    return this.http.get<IVideoResponse>(URL_VIDEOS, { params }).pipe(
      map((videoResponse: IVideoResponse) => videoResponse.items),
    );
  }

  getCurrentItem(id:string):Observable<ISearchItem> {
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics');
    return this.http.get<IVideoResponse>(URL_VIDEOS, { params })
      .pipe(
        map((videoResponse:IVideoResponse):ISearchItem => videoResponse.items[0]),
      );
  }
}

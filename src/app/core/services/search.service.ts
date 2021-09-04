import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SearchService {
  private searchPattern = new BehaviorSubject<string>('');

  public searchPattern$: Observable<string>;

  constructor(@Optional() @SkipSelf() parent?: SearchService) {
    this.searchPattern$ = this.searchPattern.asObservable();
    if (parent) {
      throw Error(
        `[SearchService]: trying to create multiple instances,
      but this service should be a singleton.`,
      );
    }
  }

  setSearchPattern(pattern:string): void {
    this.searchPattern.next(pattern);
  }
}

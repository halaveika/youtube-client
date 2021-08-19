import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FilterService {
  public sortDataValue = new BehaviorSubject<string>('');

  public sortCountValue = new BehaviorSubject<string>('');

  public filterPattern = new BehaviorSubject<string>('');

  public sortDataValue$: Observable<string>;

  public sortCountValue$: Observable<string>;

  public filterPattern$: Observable<string>;
  constructor(@Optional() @SkipSelf() parent?: FilterService) {
    this.sortDataValue$ = this.sortDataValue.asObservable();
    this.sortCountValue$ = this.sortCountValue.asObservable();
    this.filterPattern$ = this.filterPattern.asObservable();
    if (parent) {
      throw Error(
        `[FilterService]: trying to create multiple instances,
      but this service should be a singleton.`,
      );
    }
  }

  setDataValue(value:string):void {
    this.sortDataValue.next(value);
  }

  setCountValue(value:string):void {
    this.sortCountValue.next(value);
  }

  setFilterPattern(value:string):void {
    this.filterPattern.next(value);
  }

}

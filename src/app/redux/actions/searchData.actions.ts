import { Action } from '@ngrx/store';
import { ISearchItem } from '@shared/models/i-search-item';

export enum ESearchDataActions {
  SetSearchData = '[SearchData] Set Search Data',
}

export class SetSearchData implements Action {
  public readonly type = ESearchDataActions.SetSearchData;

  constructor(public payload: ISearchItem []) {}
}

export type SearchDataActions = SetSearchData;

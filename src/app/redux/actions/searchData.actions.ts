import { Action } from '@ngrx/store';
import { IVideoData } from '@shared/models/IVideoData';


export enum ESearchDataActions {
  SetSearchData = '[SearchData] Set Search Data',
}



export class SetSearchDataA implements Action {
  public readonly type = ESearchDataActions.SetSearchData;
  constructor(public payload: IVideoData[]) {}
}

export type SearchDataActions = SetSearchDataA;

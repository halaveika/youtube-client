import { Action } from '@ngrx/store';
import { ICardData } from '@shared/models/ICardData';


export enum ECardsDataActions {
  SetCardData = '[Cards] Set Card Data',
}



export class SetCardData implements Action {
  public readonly type = ECardsDataActions.SetCardData;
  constructor(public payload: ICardData) {}
}

export type CardsDataActions = SetCardData;

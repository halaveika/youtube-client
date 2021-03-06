import { Action } from '@ngrx/store';
import { ICardData } from '@shared/models/ICardData';

export enum ECardsDataActions {
  SetCardData = '[Cards] Set Card Data',
  SelectCard = '[Cards] Select Card',
}

export class SetCardData implements Action {
  public readonly type = ECardsDataActions.SetCardData;

  constructor(public payload: ICardData) {}
}

export class SelectCard implements Action {
  public readonly type = ECardsDataActions.SelectCard;

  constructor(public payload: number | null) {}
}

export type CardsDataActions = SetCardData | SelectCard;

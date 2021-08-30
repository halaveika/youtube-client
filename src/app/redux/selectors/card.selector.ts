import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICardsState } from '../state/cardsData.state';


const selectCards= (state: IAppState) => state.cards;

export const selectCardList = createSelector(
  selectCards,
  (state: ICardsState ) => state.cardsData
);

export const selectDetailedCard = (id: string) => createSelector(
  selectCards,
  (state: ICardsState) => state.cardsData[+id]
);

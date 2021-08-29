import { RouterReducerState } from '@ngrx/router-store';
import { ICardsState, initialCardsState } from './cardsData.state';
import { initialSearchDataState, ISearchDataState } from './searchData.state';


export interface IAppState {
  router?: RouterReducerState;
  cards: ICardsState;
  searchData: ISearchDataState;
}

export const initialAppState: IAppState = {
  cards: initialCardsState,
  searchData: initialSearchDataState
};

export function getInitialState(): IAppState {
  return initialAppState;
}

import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { cardsDataReducer } from './cardsData.reducer';
import { searchDataReducer } from './searchData.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  cards: cardsDataReducer,
  searchData: searchDataReducer,
  router: routerReducer
};


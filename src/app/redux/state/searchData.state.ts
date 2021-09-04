import { ISearchItem } from '@shared/models/i-search-item';

export interface ISearchDataState {
  searchData: ISearchItem [];
}

export const initialSearchDataState: ISearchDataState = {
  searchData: [],
};

import { IVideoData } from '@shared/models/IVideoData';

export interface ISearchDataState {
  searchData: IVideoData[];
}

export const initialSearchDataState: ISearchDataState  = {
  searchData: []
};

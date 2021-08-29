import { ESearchDataActions, SearchDataActions } from '../actions/searchData.actions';
import { initialSearchDataState, ISearchDataState } from '../state/searchData.state';

export const searchDataReducer = (
  state = initialSearchDataState,
  action: SearchDataActions
): ISearchDataState => {
  switch (action.type) {
    case ESearchDataActions.SetSearchData: {
      return {
        ...state,
        searchData: action.payload
      };
    }
    default:
      return state;
  }
};

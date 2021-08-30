import { CardsDataActions, ECardsDataActions } from '../actions/cardsData.actions';
import { ICardsState, initialCardsState } from '../state/cardsData.state';

export const cardsDataReducer = (
  state = initialCardsState,
  action: CardsDataActions
): ICardsState => {
  switch (action.type) {
    case ECardsDataActions.SetCardData: {
      return {
        ...state,
        cardsData: state.cardsData.concat([action.payload])
      };
    }
    default:
      return state;
  }
};

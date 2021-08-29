
import { ICardData } from '@shared/models/ICardData';

export interface ICardsState {
  cardsData: ICardData[]
}

export const initialCardsState: ICardsState= {
  cardsData: []
};

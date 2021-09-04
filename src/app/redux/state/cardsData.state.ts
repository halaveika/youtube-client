import { ICardData } from '@shared/models/ICardData';

export interface ICardsState {
  cardsData: ICardData[],
  index: number | null
}

export const initialCardsState: ICardsState = {
  cardsData: [],
  index: null,
};

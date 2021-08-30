import { Component } from '@angular/core';
import { selectDetailedCard } from '@app/redux/selectors/card.selector';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import { ICardData } from '@shared/models/ICardData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-detailed',
  templateUrl: './card-detailed.component.html',
  styleUrls: ['./card-detailed.component.scss'],
})
export class CardDetailedComponent {
  public cardData$: Observable<ICardData> = this.store.pipe(select(selectDetailedCard()));

  constructor(private store: Store<IAppState>) {
  }
}

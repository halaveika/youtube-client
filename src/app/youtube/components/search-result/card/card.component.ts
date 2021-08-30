import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SelectCard } from '@redux/actions/cardsData.actions';
import { IAppState } from '@redux/state/app.state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public title = '';

  @Input() public img = '';

  @Input() public id = 0;

  constructor(private store: Store<IAppState>, private router: Router) { }

  toCardDetailed(): void {
    this.store.dispatch(new SelectCard(this.id));
    this.router.navigate(['main/card']);
  }
}

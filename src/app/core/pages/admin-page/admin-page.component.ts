import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetCardData } from '@app/redux/actions/cardsData.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  public title = '';

  public description = '';

  public img = '';

  public linkVideo = '';

  constructor(private store: Store, private router: Router) { }

  creatCard() {
    if (this.title.trim() && this.description.trim() && this.img.trim() && this.linkVideo.trim()) {
      const creatingDate = new Date();
      this.store.dispatch(new SetCardData({
        title: this.title, description: this.description, img: this.img, linkVideo: this.linkVideo, creatingDate,
      }));
      this.router.navigate(['main']);
    }
  }
}

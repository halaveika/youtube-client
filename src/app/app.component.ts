import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public toggleFilterFlag = false;
  toggleFilter(toggleFlag: boolean) {
    this.toggleFilterFlag = toggleFlag;
  }
  title = 'youtube-client';
}

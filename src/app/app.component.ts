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
  public sendSortDataValue = '';
  public sendSortCountValue = '';
  public sendFilterPattern= '';
  catchSortDataValue(value: string) {
    this.sendSortDataValue = value;
  }
  catchSortCountValue(value: string) {
    this.sendSortCountValue = value;
  }
  catchFilterPattern(value: string) {
    this.sendFilterPattern = value;
  }


  title = 'youtube-client';
}

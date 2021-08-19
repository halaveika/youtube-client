import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public toggleFilterFlag = false;

  toggleFilter(toggleFlag: boolean) {
    this.toggleFilterFlag = toggleFlag;
  }
}

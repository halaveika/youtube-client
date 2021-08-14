import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleFilterFlag = new EventEmitter<boolean>();

  toggleFilter(toggleFlag: boolean) {
    this.toggleFilterFlag.emit(toggleFlag);
  }
}

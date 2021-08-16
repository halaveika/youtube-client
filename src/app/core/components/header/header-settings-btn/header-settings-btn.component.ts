import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-settings-btn',
  templateUrl: './header-settings-btn.component.html',
  styleUrls: ['./header-settings-btn.component.scss'],
})
export class HeaderSettingsBtnComponent {
  public filterStatus = false;

  @Output() toggleFilterFlag = new EventEmitter<boolean>();

  public toggleFilter(): void {
    this.filterStatus = !this.filterStatus;
    this.toggleFilterFlag.emit(this.filterStatus);
  }
}

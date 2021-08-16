import { Component, EventEmitter, Output } from '@angular/core';
import { ASC, DESC } from '../../../../shared/constans';

@Component({
  selector: 'app-filter-sort-buttons',
  templateUrl: './filter-sort-buttons.component.html',
  styleUrls: ['./filter-sort-buttons.component.scss'],
})
export class FilterSortButtonsComponent {
  public sortDataValue = '';

  public sortCountValue = '';

  @Output() sendSortDataValue = new EventEmitter<string>();

  @Output() sendSortCountValue = new EventEmitter<string>();

  public sortData(): void {
    if (this.sortDataValue !== ASC) { this.sortDataValue = ASC; } else { this.sortDataValue = DESC; }
    this.sendSortDataValue.emit(this.sortDataValue);
  }

  public sortCount(): void {
    if (this.sortCountValue !== ASC) { this.sortCountValue = ASC; } else { this.sortCountValue = DESC; }
    this.sendSortCountValue.emit(this.sortCountValue);
  }
}

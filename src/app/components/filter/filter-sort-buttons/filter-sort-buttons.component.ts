import { Component, EventEmitter, Output } from '@angular/core';
import { ASC, DESC } from '../../../shared/constans';

@Component({
  selector: 'app-filter-sort-buttons',
  templateUrl: './filter-sort-buttons.component.html',
  styleUrls: ['./filter-sort-buttons.component.scss']
})
export class FilterSortButtonsComponent {
  public sortDataValue = '';
  public sortCountValue = '';
  @Output() sendSortDataValue = new EventEmitter<string>();
  @Output() sendSortCountValue = new EventEmitter<string>();
  constructor() { }

  public sortData(): void {
    (this.sortDataValue !== ASC) ? (this.sortDataValue = ASC) : this.sortDataValue = DESC;
    this.sendSortDataValue.emit(this.sortDataValue);
}

public sortCount(): void {
  (this.sortCountValue !== ASC) ? (this.sortCountValue = ASC) : this.sortCountValue = DESC;
  this.sendSortCountValue.emit(this.sortCountValue);
}
}

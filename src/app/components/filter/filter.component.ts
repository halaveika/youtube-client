import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent{
  @Output() sendSortDataValue = new EventEmitter<string>();
  @Output() sendSortCountValue = new EventEmitter<string>();
  @Output() sendFilterPattern = new EventEmitter<string>();
  catchSortDataValue(value: string) {
    this.sendSortDataValue.emit(value);
  }
  catchSortCountValue(value: string) {
    this.sendSortCountValue.emit(value);
  }
  catchFilterPattern(value: string) {
    this.sendFilterPattern.emit(value);
  }

}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-sort-input',
  templateUrl: './filter-sort-input.component.html',
  styleUrls: ['./filter-sort-input.component.scss'],
})
export class FilterSortInputComponent {
  public filterPattern = '';

  @Output() sendFilterPattern = new EventEmitter<string>();

  public onInput(event: Event) {
    this.filterPattern = (event.target as HTMLInputElement).value;
  }

  public onModelChange() {
    this.sendFilterPattern.emit(this.filterPattern);
  }
}

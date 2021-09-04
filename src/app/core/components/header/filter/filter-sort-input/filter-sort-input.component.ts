import { Component } from '@angular/core';
import { FilterService } from '@core/services/filter.service';

@Component({
  selector: 'app-filter-sort-input',
  templateUrl: './filter-sort-input.component.html',
  styleUrls: ['./filter-sort-input.component.scss'],
})
export class FilterSortInputComponent {
  public filterPattern = '';

  constructor(private filterService: FilterService) {

  }

  public onInput(event: Event) {
    this.filterPattern = (event.target as HTMLInputElement).value;
  }

  public onModelChange() {
    this.filterService.setFilterPattern(this.filterPattern);
  }
}

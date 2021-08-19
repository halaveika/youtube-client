import { Component } from '@angular/core';
import { FilterService } from '@core/services/filter.service';
import { ASC, DESC } from '@shared/constans';

@Component({
  selector: 'app-filter-sort-buttons',
  templateUrl: './filter-sort-buttons.component.html',
  styleUrls: ['./filter-sort-buttons.component.scss'],
})
export class FilterSortButtonsComponent {
  public sortDataValue = '';

  public sortCountValue = '';

  constructor(private filterService: FilterService) {

  }

  public sortData(): void {
    if (this.sortDataValue !== ASC) { this.sortDataValue = ASC; } else { this.sortDataValue = DESC; }
    this.filterService.setDataValue(this.sortDataValue);
  }

  public sortCount(): void {
    if (this.sortCountValue !== ASC) { this.sortCountValue = ASC; } else { this.sortCountValue = DESC; }
    this.filterService.setCountValue(this.sortCountValue);
  }
}

import { Component, Input } from '@angular/core';
import { GetResponseService } from 'src/app/core/services/get-response-service.service';
import { SearchItem } from '../../../core/models/search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  public searchItemsArr:SearchItem[] = [];

  @Input() public sortDataValue = '';

  @Input() public sortCountValue = '';

  @Input() public filterPattern = '';

  constructor(private getResponseService: GetResponseService) {
    this.getResponseService.searchItemsData$.subscribe((items) => { this.searchItemsArr = items; return true; });
  }
}
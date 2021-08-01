import { Component, OnInit } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  sortingOder = 0;

  items:SearchItemComponent[] = [];

  ngOnInit(): void {
  }
}

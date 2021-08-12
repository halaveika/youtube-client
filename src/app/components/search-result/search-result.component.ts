import { Component, OnInit } from '@angular/core';
import { GetResponseService } from 'src/app/services/get-response-service.service';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit{
  public searchItemsArr:SearchItem[] = [];

  constructor(private getResponseService: GetResponseService) {
    this.getResponseService.searchItemsData$.subscribe( items => this.searchItemsArr = items);
  }

  ngOnInit() {
  }


}

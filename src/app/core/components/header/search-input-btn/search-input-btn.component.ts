import { Component } from '@angular/core';
import { GetResponseService } from '@core/services/get-response-service.service';

@Component({
  selector: 'app-search-input-btn',
  templateUrl: './search-input-btn.component.html',
  styleUrls: ['./search-input-btn.component.scss'],
})
export class SearchInputBtnComponent {
  public searchPattern = '';

  constructor(private getResponseService: GetResponseService) {

  }

  public onInput(event: Event) {
    this.searchPattern = (event.target as HTMLInputElement).value;
  }

  public onSearch() {
    this.getResponseService.getResponse(this.searchPattern);
  }
}

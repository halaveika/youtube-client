import { Component } from '@angular/core';
import { GetResponseService } from 'src/app/services/get-response-service.service';

@Component({
  selector: 'app-header-search-input-with-btn',
  templateUrl: './header-search-input-with-btn.component.html',
  styleUrls: ['./header-search-input-with-btn.component.scss'],
  providers: [ GetResponseService ]
})
export class HeaderSearchInputWithBtnComponent {
  public searchPattern ='';
  constructor(private getResponseService: GetResponseService) {

  }
  public onInput(event: Event) {
    this.searchPattern = (event.target as HTMLInputElement).value;
  }

  public onSearch() {
      this.getResponseService.getResponse(this.searchPattern);
  }
}

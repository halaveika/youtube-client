import { Component } from '@angular/core';
import { YoutubeService } from '@app/core/services/youtube.service';

@Component({
  selector: 'app-search-input-btn',
  templateUrl: './search-input-btn.component.html',
  styleUrls: ['./search-input-btn.component.scss'],
})
export class SearchInputBtnComponent {
  public searchPattern = '';

  constructor(private youtubeService: YoutubeService) {

  }

  public onInput(event: Event) {
    this.searchPattern = (event.target as HTMLInputElement).value;
  }

  public onSearch() {
    this.youtubeService.getResponse(this.searchPattern);
  }
}

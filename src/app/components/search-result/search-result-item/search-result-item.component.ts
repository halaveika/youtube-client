import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent{
  constructor() { }
  @Input() public viewCount = '';
  @Input() public likeCount = '';
  @Input() public dislikeCount = '';
  @Input() public commentCount = '';
  @Input() public title = '';
  @Input() public srcImg = '';
}

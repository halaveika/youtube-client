import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { YoutubeService } from '@app/core/services/youtube.service';
import { SearchItem } from '@core/models/search-item.model';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent implements OnInit {
  private currentItem: SearchItem | null = null;

  private id = '';

  public viewCount = '';

  public likeCount = '';

  public dislikeCount = '';

  public commentCount = '';

  public title = '';

  public srcImg = '';

  public itemPublishDate = '';

  public description = '';

  constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => { this.id = params.id; return true; });
    this.currentItem = this.youtubeService.getCurrentItem(this.id) as SearchItem;
    this.viewCount = this.currentItem.statistics.viewCount;
    this.likeCount = this.currentItem.statistics.likeCount;
    this.dislikeCount = this.currentItem.statistics.dislikeCount;
    this.commentCount = this.currentItem.statistics.commentCount;
    this.title = this.currentItem.snippet.title;
    this.srcImg = this.currentItem.snippet.thumbnails.high.url;
    this.itemPublishDate = this.currentItem.snippet.publishedAt;
    this.description = this.currentItem.snippet.description;
  }
}

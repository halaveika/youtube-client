import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ISearchItem } from '@app/youtube/models/i-search-item.model';
import { YoutubeHttpService } from '@youtube/services/youtube-http.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent implements OnInit {
  private currentItem: ISearchItem | null = null;

  private id = '';

  public viewCount = '';

  public likeCount = '';

  public dislikeCount = '';

  public commentCount = '';

  public title = '';

  public srcImg = '';

  public itemPublishDate = '';

  public description = '';

  constructor(private youtubeHttpService: YoutubeHttpService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => { this.id = params.id; return true; });
    this.currentItem = this.youtubeHttpService.getCurrentItem(this.id) as ISearchItem;
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

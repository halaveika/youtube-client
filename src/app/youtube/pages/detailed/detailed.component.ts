import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { YoutubeHttpService } from '@youtube/services/youtube-http.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent implements OnInit {
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
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      return true;
    });
    this.youtubeHttpService.getCurrentItem(this.id).subscribe(item => {
      this.viewCount = item.statistics.viewCount;
      this.likeCount = item.statistics.likeCount;
      this.dislikeCount = item.statistics.dislikeCount;
      this.commentCount = item.statistics.commentCount;
      this.title = item.snippet.title;
      this.srcImg = item.snippet.thumbnails.high.url;
      this.itemPublishDate = item.snippet.publishedAt;
      this.description = item.snippet.description;
      return true;
    });
  }
}

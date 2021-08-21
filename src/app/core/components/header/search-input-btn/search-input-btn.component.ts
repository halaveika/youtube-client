import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { YoutubeService } from '@app/core/services/youtube.service';
import { Observable } from 'rxjs';
import { debounceTime, filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-input-btn',
  templateUrl: './search-input-btn.component.html',
  styleUrls: ['./search-input-btn.component.scss'],
})
export class SearchInputBtnComponent implements OnInit {
  textControl = new FormControl();
  public searchPattern$: Observable<string>;
  constructor(private youtubeService: YoutubeService) {
    this.searchPattern$ = this.textControl.valueChanges.pipe(
      filter((str) => str.length % 3 === 0),
      debounceTime(500),
      startWith(this.textControl.value),
    );
  }
  ngOnInit(){
    this.searchPattern$.subscribe((pattern)=> this.youtubeService.getResponse(pattern));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '@app/core/services/search.service';
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
  constructor(private searchService: SearchService) {
    this.searchPattern$ = this.textControl.valueChanges.pipe(
      //in order not to spam our API, create a new Observable in your component and emit changes until the user enters at least 3 characters
      filter((str) => str.length % 3 === 0),
      debounceTime(500),
      startWith(this.textControl.value),
    );
  }
  ngOnInit(){
    this.searchPattern$.subscribe((pattern)=> this.searchService.setSearchPattern(pattern));
  }

}

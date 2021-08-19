import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { YoutubeRoutingModule } from '@youtube/youtube-routing.module';
import { SearchResultItemComponent } from './components/search-result/search-result-item/search-result-item.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { StyleItemDateDirective } from './directives/style-item-date.directive';
import { DetailedComponent } from './pages/detailed/detailed.component';
import { MainComponent } from './pages/main/main.component';
import { CountSortPipe } from './pipes/count-sort.pipe';
import { DataSortPipe } from './pipes/data-sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    SearchResultComponent,
    SearchResultItemComponent,
    StyleItemDateDirective,
    DataSortPipe,
    CountSortPipe,
    FilterPipe,
    MainComponent,
    DetailedComponent],
  exports: [ MainComponent
  ],
  imports: [
    SharedModule,
    YoutubeRoutingModule
  ],
  providers: []
})
export class YoutubeModule { }

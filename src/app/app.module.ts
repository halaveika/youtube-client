import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterSortButtonsComponent } from './youtube/components/filter/filter-sort-buttons/filter-sort-buttons.component';
import { FilterSortInputComponent } from './youtube/components/filter/filter-sort-input/filter-sort-input.component';
import { FilterComponent } from './youtube/components/filter/filter.component';
import { HeaderLoginComponent } from './core/components/header/header-login/header-login.component';
import { HeaderLogoComponent } from './core/components/header/header-logo/header-logo.component';
import { HeaderSettingsBtnComponent } from './core/components/header/header-settings-btn/header-settings-btn.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchInputBtnComponent } from './core/components/header/search-input-btn/search-input-btn.component';
import { SearchResultItemComponent } from './youtube/components/search-result/search-result-item/search-result-item.component';
import { SearchResultComponent } from './youtube/components/search-result/search-result.component';
import { StyleItemDateDirective } from './youtube/directives/style-item-date.directive';
import { CountSortPipe } from './youtube/pipes/count-sort.pipe';
import { DataSortPipe } from './youtube/pipes/data-sort.pipe';
import { FilterPipe } from './youtube/pipes/filter.pipe';
import { GetResponseService } from './core/services/get-response-service.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    SearchInputBtnComponent,
    HeaderSettingsBtnComponent,
    FilterComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    FilterSortButtonsComponent,
    FilterSortInputComponent,
    DataSortPipe,
    CountSortPipe,
    FilterPipe,
    StyleItemDateDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GetResponseService],
  bootstrap: [AppComponent],
})
export class AppModule { }

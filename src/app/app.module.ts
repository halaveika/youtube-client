import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterSortButtonsComponent } from './components/filter/filter-sort-buttons/filter-sort-buttons.component';
import { FilterSortInputComponent } from './components/filter/filter-sort-input/filter-sort-input.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderLoginComponent } from './components/header/header-login/header-login.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderSearchInputWithBtnComponent } from './components/header/header-search-input-with-btn/header-search-input-with-btn.component';
import { HeaderSettingsBtnComponent } from './components/header/header-settings-btn/header-settings-btn.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultItemComponent } from './components/search-result/search-result-item/search-result-item.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { GetResponseService } from './services/get-response-service.service';
import { SharedModule } from './shared/shared.module';
import { DataSortPipe } from './pipes/data-sort.pipe';
import { CountSortPipe } from './pipes/count-sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    HeaderSearchInputWithBtnComponent,
    HeaderSettingsBtnComponent,
    FilterComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    FilterSortButtonsComponent,
    FilterSortInputComponent,
    DataSortPipe,
    CountSortPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GetResponseService],
  bootstrap: [AppComponent],
})
export class AppModule { }

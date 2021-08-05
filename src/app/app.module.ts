import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderSearchInputWithBtnComponent } from './components/header-search-input-with-btn/header-search-input-with-btn.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSettingsBtnComponent } from './components/header-settings-btn/header-settings-btn.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';

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
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

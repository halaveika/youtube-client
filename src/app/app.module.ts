import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderSearchInputWithBtnComponent } from './components/header-search-input-with-btn/header-search-input-with-btn.component';
import { HeaderSettingsBtnComponent } from './components/header-settings-btn/header-settings-btn.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SharedModule } from './shared/shared.module';

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
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

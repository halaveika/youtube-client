
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FilterSortButtonsComponent } from './components/header/filter/filter-sort-buttons/filter-sort-buttons.component';
import { FilterSortInputComponent } from './components/header/filter/filter-sort-input/filter-sort-input.component';
import { FilterComponent } from './components/header/filter/filter.component';
import { HeaderLoginComponent } from './components/header/header-login/header-login.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderSettingsBtnComponent } from './components/header/header-settings-btn/header-settings-btn.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputBtnComponent } from './components/header/search-input-btn/search-input-btn.component';
import { FilterService } from './services/filter.service';
import { GetResponseService } from './services/get-response-service.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    SearchInputBtnComponent,
    HeaderSettingsBtnComponent,
    FilterComponent,
    FilterSortButtonsComponent,
    FilterSortInputComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent],
  providers: [
    GetResponseService,
    FilterService
  ]
})
export class CoreModule { }

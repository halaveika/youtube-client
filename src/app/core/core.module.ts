import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@core/auth-guard';
import { LoginService } from '@core/services/login.service';
import { SharedModule } from '@shared/shared.module';
import {
  FilterSortButtonsComponent,
} from './components/header/filter/filter-sort-buttons/filter-sort-buttons.component';
import { FilterSortInputComponent } from './components/header/filter/filter-sort-input/filter-sort-input.component';
import { FilterComponent } from './components/header/filter/filter.component';
import { HeaderLoginComponent } from './components/header/header-login/header-login.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderSettingsBtnComponent } from './components/header/header-settings-btn/header-settings-btn.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputBtnComponent } from './components/header/search-input-btn/search-input-btn.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { Page404Component } from './pages/page404/page404.component';
import { FilterService } from './services/filter.service';
import { SearchService } from './services/search.service';

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
    Page404Component,
    AdminPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    Page404Component,
    AdminPageComponent,
  ],
  providers: [
    SearchService,
    FilterService,
    LoginService,
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: (loginService: LoginService) => () => loginService.removeToken(),
      deps: [LoginService],
      multi: true,
    },
  ],
})
export class CoreModule { }

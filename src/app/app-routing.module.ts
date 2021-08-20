import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth-guard';
import { Page404Component } from '@core/pages/page404/page404.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('@auth/auth.module').then((m) => m.AuthModule) },
  {
    path: 'main',
    loadChildren: () => import('@youtube/youtube.module')
      .then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

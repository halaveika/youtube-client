import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '@core/pages/page404/page404.component';


const routes: Routes = [
   { path: 'main', loadChildren: ()=> import('@youtube/youtube.module').then(m => m.YoutubeModule)},
   { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


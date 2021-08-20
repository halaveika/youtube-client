import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth-guard';
import { DetailedComponent } from '@youtube/pages/detailed/detailed.component';
import { MainComponent } from '@youtube/pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'video/:id', component: DetailedComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule { }

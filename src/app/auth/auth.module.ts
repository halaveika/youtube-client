import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from '@auth/auth-routing.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

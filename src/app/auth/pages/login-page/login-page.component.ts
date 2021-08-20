import { Component } from '@angular/core';
import { LoginService } from '@core/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public loginValue = '';
  public passwordValue = '';

  constructor(private loginService:LoginService) { }

  login(){
    if (this.loginValue.trim() && this.passwordValue.trim() ){
    this.loginService.login(this.loginValue, this.passwordValue);}
  }

}

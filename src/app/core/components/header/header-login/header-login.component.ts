import { Component } from '@angular/core';
import { TOKEN } from '@app/shared/constans';
import { LoginService } from '@core/services/login.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss'],
})
export class HeaderLoginComponent {
  public userTitle = 'Your Name';

  public isLogin = false;

  constructor(private loginService:LoginService) {
    localStorage.removeItem(TOKEN);
    this.loginService.isLogin$.subscribe((islogin) => { this.isLogin = islogin; return true; });
  }

  logout() {
    this.loginService.logout();
  }
}

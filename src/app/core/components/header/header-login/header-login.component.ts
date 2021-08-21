import { Component, OnInit } from '@angular/core';
import { LoginService } from '@core/services/login.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss'],
})
export class HeaderLoginComponent implements OnInit {
  public userTitle = 'Your Name';

  public isLogin = false;

  constructor(private loginService:LoginService) {
  }

  ngOnInit() {
    this.loginService.isLogin$.subscribe((islogin) => { this.isLogin = islogin; return true; });
  }

  logout() {
    this.loginService.logout();
  }
}

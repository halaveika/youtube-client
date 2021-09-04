import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '@core/services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  private isLogin = false;

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate():Observable<boolean> | Promise<boolean> | boolean {
    this.loginService.isLogin$.subscribe((isLogin) => { this.isLogin = isLogin; });
    if (this.isLogin) {
      return true;
    }
    this.router.navigate(['login'], { queryParams: { auth: false } });
    return false;
  }
}

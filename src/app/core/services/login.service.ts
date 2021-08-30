import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from '@app/shared/constansts';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoginService {
  private loginValue = '';

  private passwordValue = '';

  private isLogin = new BehaviorSubject(false);

  private user = new BehaviorSubject('');

  public isLogin$: Observable<boolean>;

  public user$: Observable<string>;

  constructor(private router: Router) {
    this.isLogin$ = this.isLogin.asObservable();
    this.user$ = this.user.asObservable();
  }

  login(login: string, password:string) {
    this.loginValue = login;
    this.passwordValue = password;
    this.isLogin.next(true);
    this.user.next(this.loginValue);
    localStorage.setItem(TOKEN, this.generateFakeToken());
    this.router.navigate(['main']);
  }

  logout() {
    this.loginValue = '';
    this.passwordValue = '';
    this.isLogin.next(false);
    localStorage.removeItem(TOKEN);
    this.router.navigate(['login']);
  }

  generateFakeToken() {
    const rand = () => Math.random().toString(36).substr(2);
    return rand() + rand();
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }
}

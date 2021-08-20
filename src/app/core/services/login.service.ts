import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from '@app/shared/constans';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoginService {
  private _loginValue = '';
  private _passwordValue = '';
  private _isLogin = new BehaviorSubject(false);;
  public isLogin$: Observable<boolean>;
  constructor(private router: Router) {
    this.isLogin$ = this._isLogin.asObservable();

   }

  login (login: string, password:string ) {
    this._loginValue = login;
    this._passwordValue = password;

    this._isLogin.next(true);
    localStorage.setItem(TOKEN, this.generateFakeToken());
    this.router.navigate(['main']);
  }

  logout () {
    this._loginValue = '';
    this._passwordValue = '';
    this._isLogin.next(false);
    localStorage.removeItem(TOKEN);
    this.router.navigate(['login']);
  }

  generateFakeToken () {
    const rand = () => {return Math.random().toString(36).substr(2);};
    return rand() + rand();
  }


}

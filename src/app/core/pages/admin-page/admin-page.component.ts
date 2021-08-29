import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  public title = '';
  public description = '';
  public img = '';
  public linkVideo = '';

  constructor() { }

  creatCard() {
    if (this.title.trim() && this.description.trim() && this.img.trim() && this.linkVideo.trim()) {
      // this.loginService.login(this.loginValue, this.passwordValue);
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss'],
})
export class HeaderLoginComponent implements OnInit {
  public userTitle = 'Your Name';
  ngOnInit(): void {
  }
}

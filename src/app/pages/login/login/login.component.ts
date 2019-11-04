import { Component, OnInit } from '@angular/core';
import { TITLE_PAGE_LOGIN } from '@shared/constants/label-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titleLogin = TITLE_PAGE_LOGIN;
  constructor() {}

  ngOnInit() {}
}

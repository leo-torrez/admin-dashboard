import { Component, OnInit } from '@angular/core';
import { TITULO_CHAMADA_LOGIN } from '../../../constants/constants-titulo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tituloChamadaLogin = TITULO_CHAMADA_LOGIN;
  constructor() {}

  ngOnInit() {}
}

import { Component } from '@angular/core';
import {Angular2TokenService} from "angular2-token/angular2-token";

import { AuthService } from "./services/auth.service";


@Component({
  selector: 'app-root',
// templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private _tokenService: Angular2TokenService,
    public auth: AuthService
  ) {


    this._tokenService.init({
      apiBase: 'https://myvoice-ng.herokuapp.com',
      apiPath: 'api/v1',
      signInRedirect: 'login',
      registerAccountPath: '',
      globalOptions: {
        headers: {
          'Content-Type':  'application/json',
          'Accept':  'application/json',
          "access_token_name": localStorage.getItem('accessToken'),
          "client_name": localStorage.getItem('client'),
          "uid_name": localStorage.getItem('uid')
        }
      }
    });
  }

  
}

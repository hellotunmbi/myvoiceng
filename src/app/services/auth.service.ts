import { Injectable } from '@angular/core';
import {Angular2TokenService} from "angular2-token/angular2-token";

import { Router } from "@angular/router";

import * as auth0 from 'auth0-js';


@Injectable()
export class AuthService {

  constructor(
    private _tokenService: Angular2TokenService,
    public router: Router
  ) { }


 auth0 = new auth0.WebAuth({
    clientID: 'R5XnBCEbwJS4j1mYpVuFyfdTIzn9f7FN',
    domain: 'hellotunmbi.auth0.com',
    responseType: 'token id_token',
    audience: 'https://hellotunmbi.auth0.com/userinfo',
   // redirectUri: 'https://my-voice-ng.firebaseapp.com/voice', 
   redirectUri: 'http://localhost:4200/voice',      
    scope: 'openid'
  });



  public login(): void {
    this.auth0.authorize();
  }



  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/voice']);
      } else if (err) {
        this.router.navigate(['/voice']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }



  // login(user:any) {
  //   return new Promise((resolve, reject) => {
  //     this._tokenService.signIn(user)
  //       .subscribe(res => resolve(res), error => reject(error));
  //   })
  // }

  register(user:any) {
    return new Promise((resolve, reject) => {
      this._tokenService.registerAccount(user)
        .subscribe(res => resolve(res), error => reject(error));
    })
  }

  // logout() {
  //   return new Promise((resolve, reject) => {
  //     this._tokenService.signOut()
  //       .subscribe(res => resolve(res), error => reject(error));
  //   })
  // }

  // validateToken() {
  //   return new Promise((resolve, reject) => {
  //     this._tokenService.validateToken()
  //       .subscribe(res => resolve(res), error => reject(error));
  //   })
  // }






}

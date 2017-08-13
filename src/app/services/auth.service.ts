import { Injectable } from '@angular/core';
import {Angular2TokenService} from "angular2-token/angular2-token";

import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AuthService {

  private authState: Observable<firebase.User>;
  private currentUser: firebase.User = null;

  constructor(
    private _tokenService: Angular2TokenService,
    public router: Router,
    public afAuth: AngularFireAuth
  ) {
        this.authState = this.afAuth.authState;
        this.authState.subscribe(user => {
            if(user) {
              this.currentUser = user;
              console.log(user);
            } else {
              this.currentUser = null;
            }
        });
    }


    getAuthState() {
      return this.authState;
    }


    loginWithTwitter() {
      return this.afAuth.auth.signInWithPopup(
        new firebase.auth.TwitterAuthProvider()
      )
    }

    
    loginWithFacebook() {
      return this.afAuth.auth.signInWithPopup(
        new firebase.auth.FacebookAuthProvider()
      )
    }

    isLoggedIn() {
      if(this.currentUser == null ) {
        return false;
      } else {
        return true;
      }
    }


    logout() {
      this.afAuth.auth.signOut();
      this.router.navigate(['/']);
    }


    getUser() {
      return this.afAuth.auth;
    }




  register(user:any) {
    return new Promise((resolve, reject) => {
      this._tokenService.registerAccount(user)
        .subscribe(res => resolve(res), error => reject(error));
    })
  }



}

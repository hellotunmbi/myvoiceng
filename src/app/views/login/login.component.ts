import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  loginWithTwitter() {
    this.authService.loginWithTwitter()
    .then((res) => { 
        this.router.navigate(['/'])
      });
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook()
    .then((res) => { 
        this.router.navigate(['/'])
      });;
  }

  ngOnInit() {
    this.authService.getAuthState().subscribe(
      (user) => this.user = user
    );
  }


  isLoggedIn() {
    return this.authService.isLoggedIn();
  }



}

import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  registerUser() {
    console.log(this.user);
    this.authService.register(this.user)
      .then((res) => this.router.navigate(['/']))
      .catch((err) => {
        console.log("error", err);
      })
  }


  loginWithTwitter() {
    this.authService.login();
  }

  ngOnInit() {
  }

}

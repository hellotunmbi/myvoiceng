import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ComplaintsService} from '../../services/complaints.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  voice = {};
  errors = {};

  result: {};

  constructor(
    private complaintsService: ComplaintsService,
    private router: Router,
    private authService: AuthService
  ) {
    // localStorage.removeItem('current_complaint');
   }



  postComplaint() {
      // console.log(this.voice);
        if (this.authService.isLoggedIn() ) {
            this.postRant(this.voice);
            // console.log("yor are logged in: ", this.voice);
        } else {
            // save voice data to localStorage
            localStorage.setItem('current_complaint', JSON.stringify(this.voice));
            // ask me to login
            this.router.navigate(['login']);

            // post my rant
        }
      }


  postRant(voice) {
       // console.log(voice);
        this.complaintsService.postMyRant(voice)
        .then((res) => {
            // this.result = res;
            localStorage.removeItem('current_complaint');
             this.router.navigate(['voice']);
          })
        .catch((errors: any) => this.errors = errors);
      }


  storageIsSet() {
    if (localStorage.getItem('current_complaint') === null) {
      return false;
    } else {
      return true;
    }
  }


  ngOnInit() {
    this.result = {};
    if (this.storageIsSet()) {
        this.voice = JSON.parse(localStorage.getItem('current_complaint'));
        console.log(localStorage.getItem('current_complaint'));
    } else {
        this.voice = {};
    }
   }

}

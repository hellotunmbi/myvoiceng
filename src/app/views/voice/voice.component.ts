import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ComplaintsService} from "../../services/complaints.service";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  voice = {};
  errors = {};

  result = {};

  constructor(
    private complaintsService: ComplaintsService,
    public authService: AuthService,
    private router: Router
  ) { }


  postComplaint() {

    if(this.authService.isAuthenticated()) {
        this.postRant(this.voice);
    }
    else {
        //ask me to login
        this.router.navigate(['login']);
        //post my rant
    }

  }

  postRant(voice) {
   // console.log(voice);
    this.complaintsService.postMyRant(voice)
    .then((res) => {
        this.result = res
        // this.router.navigate(['/'])
      })
    .catch((errors: any) => this.errors = errors);
  }


  ngOnInit() {

  }

}

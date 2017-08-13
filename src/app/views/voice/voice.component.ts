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

  result: {};

  constructor(
    private complaintsService: ComplaintsService,
    private router: Router
  ) { }




  ngOnInit() {  }

}

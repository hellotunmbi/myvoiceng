import { Component, OnInit } from '@angular/core';

import { ComplaintsService } from "../../services/complaints.service";
import { RantComponent } from "../rant/rant.component";

@Component({
  selector: 'app-complaints',
 templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  complaints: any[];

  constructor(
    private complaintsService: ComplaintsService
  ) { }

    
  getComplaints() {
    this.complaintsService.getAllComplaints().then((complaints: any[]) => this.complaints = complaints);
  }

  // loadUser() {
  //   this.complaintsService.getUser().subscribe(data => this.complaints = data);
  // }

  ngOnInit() {
    this.complaints = [];
    console.log(this.getComplaints());



  }

}

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
  errors: any[];

  constructor(
    private complaintsService: ComplaintsService
  ) { }

    
  getComplaints() {
    this.complaintsService.getAllComplaints()
    .then((complaints: any[]) => this.complaints = complaints)
    .catch((errors: any) => this.errors = errors);
  }


  ngOnInit() {
    this.complaints = [];
    this.getComplaints();

  }

}

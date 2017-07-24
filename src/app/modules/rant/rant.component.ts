import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from "../../services/complaints.service";

import { ComplaintsComponent } from "../complaints/complaints.component";

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.css']
})
export class RantComponent implements OnInit {

  @Input() complaint: any;

  constructor(
    private complaintsService: ComplaintsService
  ) { }



  ngOnInit() {}

}

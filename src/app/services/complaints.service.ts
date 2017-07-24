import { Injectable } from '@angular/core';
import {Angular2TokenService} from "angular2-token/angular2-token";

import 'rxjs/add/operator/map';

@Injectable()
export class ComplaintsService {

  constructor(
     private _tokenService: Angular2TokenService
  ) { }


  getAllComplaints() {
    return new Promise((resolve, reject) => {
      this._tokenService.get('complaints')
      .map((res: any) => res.json()['data'])
      .subscribe( res => resolve(res), error => reject(error))
    }); 
  };




}

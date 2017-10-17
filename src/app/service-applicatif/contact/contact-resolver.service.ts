import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ContactApplicatifService } from './contact-applicatif.service';

@Injectable()
export class ContactResolver implements Resolve<any> {

  constructor(private router: Router, private contactApplicatifService: ContactApplicatifService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id: any = route.params['id'];
    return this.contactApplicatifService.getContact(id)
      .map( (res) => {
          if (res === null) {
            this.router.navigate(["/home"]);
          }
          return res;
      } )
      .catch( (err) => {
        this.router.navigate(["/home"]);
        return Observable.empty();
      } );
  }
}
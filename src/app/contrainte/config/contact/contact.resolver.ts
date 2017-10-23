import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ContactReadApplicatifServiceACI } from '../../../service-applicatif/contact/';

@Injectable()
export class ContactResolver implements Resolve<any> {

  constructor(private router: Router, private contactReadApplicatifService: ContactReadApplicatifServiceACI) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id: any = route.params['id'];
    return this.contactReadApplicatifService.find(id)
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
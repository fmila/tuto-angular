import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Contact } from '../../contact/contact';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactResolver implements Resolve<Contact> {

  constructor(private http: Http, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    let id: any = route.params['id'];
    return this.http.get(environment.apiEndpoint+ '/contact/' + id)
      .map( (res) => {
          if (res.json() === null) {
            this.router.navigate(["/home"]);
          }
          return res.json();
      } )
      .catch( (err) => {
        this.router.navigate(["/home"]);
        return Observable.empty();
      } );
  }
}
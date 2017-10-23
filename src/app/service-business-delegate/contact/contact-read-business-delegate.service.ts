import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { ContactDto } from '../../donnee/contact/contact-dto';
import { ContactReadBusinessDelegateServiceACI } from ".";

// Observable class extensions
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactReadBusinessDelegateService implements ContactReadBusinessDelegateServiceACI {
    constructor(private http: Http) {
    }

    findAll(): Observable<ContactDto[]> {
        return this.http
            .get(environment.apiEndpoint + '/contact/')
            .map(this.extractData)
            .catch(this.handleError);
    }  

    find(id: number): Observable<ContactDto> {
        return this.http
            .get(environment.apiEndpoint + '/contact/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    } 

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
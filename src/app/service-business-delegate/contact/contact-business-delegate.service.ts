import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ContactBusinessDelegateService {
    constructor(private http: Http) {
    }

    getAll(): Observable<any> {
        return this.http
            .get(environment.apiEndpoint + '/contact/')
            .map(this.extractData)
            .catch(this.handleError);
    }  

    getContact(id: number): Observable<any> {
        return this.http
            .get(environment.apiEndpoint + '/contact/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }   

    create(param: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers  });
        let body = JSON.stringify(param);
        return this.http
            .post(environment.apiEndpoint + '/contact/', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }   

    update(id: number, param: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers  });
        let body = JSON.stringify(param);
        return this.http
            .put(environment.apiEndpoint + '/contact/' + id, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }   

    delete(id: number): Observable<any> {
        return this.http
            .delete(environment.apiEndpoint + '/contact/' + id)
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
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ContactCudBusinessDelegateServiceACI } from ".";

@Injectable()
export class ContactCudBusinessDelegateMockService implements ContactCudBusinessDelegateServiceACI {

    constructor() { }

    create(param: any): Observable<any> {
        return Observable.of<boolean>(true);        
    }

    update(id: number, param: any): Observable<any> {
        return Observable.of<boolean>(true);
    }

    delete(id: number): Observable<any> {
        return Observable.of<boolean>(true);
    }
}

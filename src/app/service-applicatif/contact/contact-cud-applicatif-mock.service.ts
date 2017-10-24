import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ContactDto } from "../../donnee/contact";
import { ContactCudApplicatifServiceACI } from ".";

@Injectable()
export class ContactCudApplicatifMockService implements ContactCudApplicatifServiceACI {

    constructor() { }

    create(contact: ContactDto): Observable<any> {
        return Observable.of<boolean>(true);        
    }

    update(id: number,contact: ContactDto): Observable<any> {
        return Observable.of<boolean>(true);
    }

    delete(id: number): Observable<any> {
        return Observable.of<boolean>(true);
    }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactReadBusinessDelegateServiceACI } from "../../service-business-delegate/contact/";
import { ContactReadMetierServiceACI } from ".";

@Injectable()
export class ContactReadMetierService implements ContactReadMetierServiceACI {

    constructor(private contactReadBusinessDelegateService: ContactReadBusinessDelegateServiceACI) { }

    find(id: number): Observable<any> {
        return this.contactReadBusinessDelegateService.find(id);
    }

    findAll(): Observable<any> {
        return this.contactReadBusinessDelegateService.findAll();
    }
}
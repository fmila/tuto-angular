import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactCudBusinessDelegateServiceACI } from "../../service-business-delegate/contact/";
import { ContactCudMetierServiceACI } from ".";

@Injectable()
export class ContactCudMetierService implements ContactCudMetierServiceACI {

    constructor(private contactCudBusinessDelegateService: ContactCudBusinessDelegateServiceACI) { }

    create(contact: ContactDto): Observable<any> {
        return this.contactCudBusinessDelegateService.create(contact);
    }

    update(id: number,contact: ContactDto): Observable<any> {
        return this.contactCudBusinessDelegateService.update(id, contact);
    }

    delete(id: number): Observable<any> {
        return this.contactCudBusinessDelegateService.delete(id);
    }
}
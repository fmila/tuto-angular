import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactCudMetierServiceACI } from "../../service-metier/contact/";
import { ContactCudApplicatifServiceACI } from ".";

@Injectable()
export class ContactCudApplicatifService implements ContactCudApplicatifServiceACI {

    constructor(private contactCudMetierService: ContactCudMetierServiceACI) { }

    create(contact: ContactDto): Observable<any> {
        return this.contactCudMetierService.create(contact);
    }

    update(id: number,contact: ContactDto): Observable<any> {
        return this.contactCudMetierService.update(id, contact);
    }

    delete(id: number): Observable<any> {
        return this.contactCudMetierService.delete(id);
    }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactCudMetierService } from "../../service-metier/contact/";
import { ContactCudApplicatifServiceACI } from ".";

@Injectable()
export class ContactCudApplicatifService implements ContactCudApplicatifServiceACI {

    constructor(private contactCudMetierService: ContactCudMetierService) { }

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
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactCudBusinessDelegateService } from "../../service-business-delegate/contact/";

@Injectable()
export class ContactCudMetierService {

    constructor(private contactCudBusinessDelegateService: ContactCudBusinessDelegateService) { }

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
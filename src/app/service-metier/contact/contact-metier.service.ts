import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactBusinessDelegateService } from "../../service-business-delegate/contact/contact-business-delegate.service";

@Injectable()
export class ContactMetierService {

    constructor(private contactBusinessDelegateService: ContactBusinessDelegateService) { }

    create(contact: ContactDto): Observable<any> {
        return this.contactBusinessDelegateService.create(contact);
    }

    update(id: number,contact: ContactDto): Observable<any> {
        return this.contactBusinessDelegateService.update(id, contact);
    }

    delete(id: number): Observable<any> {
        return this.contactBusinessDelegateService.delete(id);
    }

    find(id: number): Observable<any> {
        return this.contactBusinessDelegateService.find(id);
    }

    findAll(): Observable<any> {
        return this.contactBusinessDelegateService.findAll();
    }
}
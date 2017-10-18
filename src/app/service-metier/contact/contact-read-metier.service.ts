import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactReadBusinessDelegateService } from "../../service-business-delegate/contact/";

@Injectable()
export class ContactReadMetierService {

    constructor(private contactReadBusinessDelegateService: ContactReadBusinessDelegateService) { }

    find(id: number): Observable<any> {
        return this.contactReadBusinessDelegateService.find(id);
    }

    findAll(): Observable<any> {
        return this.contactReadBusinessDelegateService.findAll();
    }
}
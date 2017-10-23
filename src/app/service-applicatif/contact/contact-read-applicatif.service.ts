import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactReadMetierServiceACI } from "../../service-metier/contact/";
import { ContactReadApplicatifServiceACI } from ".";

@Injectable()
export class ContactReadApplicatifService implements ContactReadApplicatifServiceACI {

    constructor(private contactReadMetierService: ContactReadMetierServiceACI) { }

    find(id: number): Observable<any> {
        return this.contactReadMetierService.find(id);
    }

    findAll(): Observable<any> {
        return this.contactReadMetierService.findAll();
    }
}
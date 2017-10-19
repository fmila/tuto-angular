import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactReadMetierService } from "../../service-metier/contact/";
import { ContactReadApplicatifServiceACI } from ".";

@Injectable()
export class ContactReadApplicatifService implements ContactReadApplicatifServiceACI {

    constructor(private contactReadMetierService: ContactReadMetierService) { }

    find(id: number): Observable<any> {
        return this.contactReadMetierService.find(id);
    }

    findAll(): Observable<any> {
        return this.contactReadMetierService.findAll();
    }
}
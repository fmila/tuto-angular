import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactReadMetierServiceACI } from "../../service-metier/contact/";
import { ContactReadApplicatifServiceACI } from ".";
import { ContactFactoryService } from "../../contrainte/factory/contact";

@Injectable()
export class ContactReadApplicatifService implements ContactReadApplicatifServiceACI {

    constructor(private contactReadMetierService: ContactReadMetierServiceACI, private contactFactory: ContactFactoryService) { }

    find(id: number): Observable<any> {
        return this.contactReadMetierService.find(id);
    }

    findAll(): Observable<any> {
        return this.contactReadMetierService.findAll().map(contacts => this.contactFactory.contactsDtoFromDo(contacts));
    }
}
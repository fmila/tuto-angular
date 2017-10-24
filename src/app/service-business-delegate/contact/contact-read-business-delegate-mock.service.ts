import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ContactDto } from "../../donnee/contact";
import { CONTACTS_DTO } from "../../donnee/contact";
import { ContactReadBusinessDelegateServiceACI } from ".";

@Injectable()
export class ContactReadBusinessDelegateMockService implements ContactReadBusinessDelegateServiceACI {

    constructor() { }

    find(id: number): Observable<ContactDto> {     
        return Observable.of<ContactDto[]>(CONTACTS_DTO).map(contacts => contacts.find(ct => ct.id === id));
    }

    findAll(): Observable<ContactDto[]> {
        return Observable.of<ContactDto[]>(CONTACTS_DTO);
    }   

}

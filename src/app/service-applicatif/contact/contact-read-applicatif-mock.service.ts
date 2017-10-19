import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact";
import { CONTACTS_DTO } from "../../donnee/contact";
import { IContactReadApplicatifService } from ".";

@Injectable()
export class ContactReadApplicatifMockService implements IContactReadApplicatifService {

    constructor() { }

    find(id: number): Observable<any> {        
        return Observable.of<ContactDto[]>(CONTACTS_DTO).map(contacts => contacts.find(ct => ct.id === id));
    }

    findAll(): Observable<any> {
        return Observable.of<ContactDto[]>(CONTACTS_DTO);
    }   

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact";
import { CONTACTS_DTO } from "../../donnee/contact";

@Injectable()
export class ContactReadBusinessDelegateMockService {

    constructor() { }

    find(id: number): Observable<ContactDto> {     
        return Observable.of<ContactDto[]>(CONTACTS_DTO).map(contacts => contacts.find(ct => ct.id === id));
    }

    findAll(): Observable<ContactDto[]> {
        return Observable.of<ContactDto[]>(CONTACTS_DTO);
    }   

}

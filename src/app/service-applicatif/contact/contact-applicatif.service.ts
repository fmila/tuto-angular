import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact/contact-dto";
import { ContactMetierService } from "../../service-metier/contact/contact-metier.service";

@Injectable()
export class ContactApplicatifService {

    constructor(private contactMetierService: ContactMetierService) { }

    create(contact: ContactDto): Observable<any> {
        return this.contactMetierService.create(contact);
    }

    update(id: number,contact: ContactDto): Observable<any> {
        return this.contactMetierService.update(id, contact);
    }

    delete(id: number): Observable<any> {
        return this.contactMetierService.delete(id);
    }

    find(id: number): Observable<any> {
        return this.contactMetierService.find(id);
    }

    findAll(): Observable<any> {
        return this.contactMetierService.findAll();
    }
}
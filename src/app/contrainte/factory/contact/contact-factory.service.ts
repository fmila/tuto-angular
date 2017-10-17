import { Injectable } from '@angular/core';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactDo } from "../../../donnee/contact/contact-do";

@Injectable()
export class ContactFactoryService {
    constructor() { }
    contactDtoFromDo(ctDo: ContactDo): ContactDto {
        return new ContactDto(ctDo.id, ctDo.firstName, ctDo.lastName, ctDo.email);
    }    
    contactsDtoFromDo(contactsDo: ContactDo[]): ContactDto[] {
        return contactsDo.map(ctDo => this.contactDtoFromDo(ctDo));
    }
}
import { Injectable } from '@angular/core';

import { ContactDto, ContactDo } from "../../../donnee/contact";

@Injectable()
export class ContactFactoryService {

    constructor() { }

    contactDtoFromDo(ctDo): ContactDto {
        return new ContactDto(ctDo.id, ctDo.firstName, ctDo.lastName);
    }
    
    contactsDtoFromDo(contactsDo: ContactDo[]): ContactDto[] {
        return contactsDo.map(ctDo => this.contactDtoFromDo(ctDo));
    }

}

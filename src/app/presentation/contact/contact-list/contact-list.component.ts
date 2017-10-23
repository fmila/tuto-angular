import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactReadApplicatifServiceACI, ContactCudApplicatifServiceACI } from '../../../service-applicatif/contact/';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts : ContactDto[];

  contact : ContactDto;
  
  @Output() onEdit = new EventEmitter<ContactDto>(); 

  @Output() onDelete = new EventEmitter<ContactDto>(); 

  constructor(private contactReadApplicatifService: ContactReadApplicatifServiceACI, private contactCudApplicatifService: ContactCudApplicatifServiceACI, private flashMessageService : FlashMessageService) { }

  ngOnInit() {
    this.contactReadApplicatifService.findAll()
      .subscribe(resp => {            
          this.contacts = resp;
      });
  }

  select(contact: ContactDto):void {
    this.contact = contact;
  }

  delete(contact: ContactDto):void {
    this.contactCudApplicatifService
      .delete(contact.id)
      .subscribe(
        resp => {
          this.flashMessageService.success('Deleted!!', );
          for(let i = 0; i < this.contacts.length; i++) { 
            if(this.contacts[i] == contact){
              this.contacts.splice(i, 1);
            }      
          }
        },
        err => {
          this.flashMessageService.error('An error occured!!');
        }
      )
      ;
  }

  edit(contact: ContactDto):void {
    this.onEdit.emit(contact);
  }
}

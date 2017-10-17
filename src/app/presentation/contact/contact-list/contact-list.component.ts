import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';
import { FlashMessageService } from '../../../contrainte/commun/flash-message.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactApplicatifService]
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts : ContactDto[];
  subscription: Subscription;
  message = null;

  @Output() onSelect = new EventEmitter<ContactDto>(); 

  @Output() onEdit = new EventEmitter<ContactDto>(); 

  @Output() onDelete = new EventEmitter<ContactDto>(); 

  constructor(private contactApplicatifService: ContactApplicatifService, private flashMessageService : FlashMessageService) { }

  ngOnInit() {
    this.contactApplicatifService.getAll()
      .subscribe(resp => {            
          this.contacts = resp;
      });
    this.subscription = this.flashMessageService.getMessage().subscribe(message => {
        this.message = message;
    });
  }

  select(contact: ContactDto):void {
    this.onSelect.emit(contact);
  }

  delete(contact: ContactDto):void {
    this.contactApplicatifService
      .delete(contact.id)
      .subscribe(
        resp => {
          this.flashMessageService.setMessage('Deleted!!', 1);
          for(let i = 0; i < this.contacts.length; i++) { 
            if(this.contacts[i] == contact){
              this.contacts.splice(i, 1);
            }      
          }
        },
        err => {
          this.flashMessageService.setMessage('An error occured!!', 2);
        }
      )
      ;
  }

  edit(contact: ContactDto):void {
    this.onEdit.emit(contact);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

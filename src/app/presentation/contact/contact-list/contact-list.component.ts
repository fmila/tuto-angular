import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactApplicatifService]
})
export class ContactListComponent implements OnInit {

  contacts : ContactDto[];
  deleted : boolean = false;
  error : boolean = false;

  @Output() onSelect = new EventEmitter<ContactDto>(); 

  @Output() onEdit = new EventEmitter<ContactDto>(); 

  @Output() onDelete = new EventEmitter<ContactDto>(); 

  constructor(private contactApplicatifService: ContactApplicatifService) { }

  ngOnInit() {
    this.contactApplicatifService.getAll()
          .subscribe(resp => {            
             this.contacts = resp;
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
          this.deleted = true;
          this.error = false;
          for(let i = 0; i < this.contacts.length; i++) { 
            if(this.contacts[i] == contact){
              this.contacts.splice(i, 1);
            }      
          }
        },
        err => {
          this.error = true;
        }
      )
      ;
  }

  edit(contact: ContactDto):void {
    this.onEdit.emit(contact);
  }

}

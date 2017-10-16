import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../contact';
import { environment } from '../../../environments/environment';
import { ContactObservableService } from '../../services/contact/contact-observable.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactObservableService]
})
export class ContactListComponent implements OnInit {

  contacts : Contact[];
  deleted : boolean = false;
  error : boolean = false;

  @Output() onSelect = new EventEmitter<Contact>(); 

  @Output() onEdit = new EventEmitter<Contact>(); 

  @Output() onDelete = new EventEmitter<Contact>(); 

  constructor(private http: HttpClient, private contactObservableService: ContactObservableService) { }

  ngOnInit() {
    this.http.get<Contact[]>(environment.wsContactListUrl)
          .subscribe(resp => {            
             this.contacts = resp;
          });

  }

  select(contact: Contact):void {
    this.onSelect.emit(contact);
  }

  delete(contact: Contact):void {
    this.contactObservableService
      .delete(environment.wsContactDeleteUrl + contact.id, contact)
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

  edit(contact: Contact):void {
    this.onEdit.emit(contact);
  }

}

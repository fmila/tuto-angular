import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  currentContact : Contact;

  constructor() { }

  ngOnInit() {
  }

  contactSelected(contact : Contact) : void { 
    this.currentContact = contact;
  }
}

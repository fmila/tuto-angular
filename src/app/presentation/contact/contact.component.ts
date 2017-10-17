import { Component, OnInit } from '@angular/core';

import { ContactDto } from "../../donnee/contact/contact-dto";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  currentContact : ContactDto;

  constructor() { }

  ngOnInit() {
  }

  contactSelected(contact : ContactDto) : void { 
    this.currentContact = contact;
  }
}

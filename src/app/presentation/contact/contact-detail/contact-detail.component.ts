import { Component, OnInit, Input } from '@angular/core';

import { ContactDto } from "../../../donnee/contact/contact-dto";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: ContactDto;
  
  constructor() { }

  ngOnInit() {
  }

}

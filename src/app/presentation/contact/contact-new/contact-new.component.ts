import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css'],
  providers: [ContactApplicatifService]
})
export class ContactNewComponent implements OnInit {

  contact: ContactDto;
  id: number;
  error: boolean = false;
  submitted: boolean = false;

  constructor(private contactApplicatifService: ContactApplicatifService) {
    
  }

  ngOnInit() {
    this.contact = new ContactDto();
  }

  onSubmit() { 
    this.contactApplicatifService
      .create(this.contact)
      .subscribe(
        resp => {
          this.submitted = true;
          this.error = false;
        },
        err => {
          this.error = true;
        }
      )
      ;
  }

}

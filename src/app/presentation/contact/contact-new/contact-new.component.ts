import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  contact: ContactDto;

  constructor(private contactApplicatifService: ContactApplicatifService, private flashMessageService : FlashMessageService, private router: Router) {
    
  }

  ngOnInit() {
    this.contact = new ContactDto();
  }

  onSubmit() { 
    this.contactApplicatifService
      .create(this.contact)
      .subscribe(
        resp => {
          this.flashMessageService.success('Added!!', );
          this.router.navigate(['contact-edit', resp.id]);
        },
        err => {
          this.flashMessageService.error('An error occured!!');
        }
      )
      ;
  }

}

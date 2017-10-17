import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';
import { FlashMessageService } from '../../../contrainte/commun/flash-message.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css'],
  providers: [ContactApplicatifService]
})
export class ContactNewComponent implements OnInit {

  contact: ContactDto;
  message = null;

  constructor(private contactApplicatifService: ContactApplicatifService, private flashMessageService : FlashMessageService, private router: Router) {
    
  }

  ngOnInit() {
    this.contact = new ContactDto();
    this.flashMessageService.getMessage().subscribe(message => {
        this.message = message;
    });
  }

  onSubmit() { 
    this.contactApplicatifService
      .create(this.contact)
      .subscribe(
        resp => {
          this.flashMessageService.setMessage('Added!!', 1);
          this.router.navigate(['contact-edit', resp.id]);
        },
        err => {
          this.flashMessageService.setMessage('An error occured!!', 2);
        }
      )
      ;
  }

}

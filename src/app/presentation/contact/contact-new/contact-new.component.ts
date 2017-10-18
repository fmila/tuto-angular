import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';
import { ContactValidatorService } from '../../../contrainte/validator/contact/contact-validator.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  contact: ContactDto;
  contactForm: any;

  constructor(private contactApplicatifService: ContactApplicatifService, private flashMessageService : FlashMessageService, private router: Router, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.contact = new ContactDto();
    this.contactForm = this.fb.group({
      'firstName': [this.contact.firstName,[Validators.required,Validators.minLength(4)]],
      'lastName': [this.contact.lastName,[Validators.required,Validators.minLength(4)]],
      'email': [this.contact.email,[Validators.required,Validators.email]]
    });
  }

  onSubmit() { 
    if (this.contactForm.valid) {
      this.contactApplicatifService
        .create(this.contact)
        .subscribe(
          resp => {
            this.router.navigate(['contact-edit', resp.id]);
            this.flashMessageService.success('Added!!', true);
          },
          err => {
            this.flashMessageService.error('An error occured!!', true);
          }
        )
        ;
    }
  }

}

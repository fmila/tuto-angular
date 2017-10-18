import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactCudApplicatifService } from '../../../service-applicatif/contact/';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';
import { FormValidator } from '../../../contrainte/validator/form-validator';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  contact: ContactDto;
  contactForm: any;

  constructor(private contactCudApplicatifService: ContactCudApplicatifService, private flashMessageService : FlashMessageService, private router: Router, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.contact = new ContactDto();
    this.contactForm = this.fb.group({
      'firstName': [this.contact.firstName,[Validators.required,Validators.minLength(2)]],
      'lastName': [this.contact.lastName,[Validators.required,Validators.minLength(2)]],
      'email': [this.contact.email,[Validators.required, FormValidator.emailValidator]]
    });
  }

  onSubmit() { 
    if (this.contactForm.valid) {
      this.contactCudApplicatifService
        .create(this.contactForm.value)
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

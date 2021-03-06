import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactCudApplicatifServiceACI } from '../../../service-applicatif/contact/';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';
import { FormValidator } from '../../../contrainte/validator/form-validator';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact: ContactDto;
  contactForm: any;

  constructor(private route: ActivatedRoute, private contactCudApplicatifService: ContactCudApplicatifServiceACI, private flashMessageService : FlashMessageService, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
    this.contactForm = this.fb.group({
      'id': [this.contact.id],
      'firstName': [this.contact.firstName,[Validators.required,Validators.minLength(2)]],
      'lastName': [this.contact.lastName,[Validators.required,Validators.minLength(2)]],
      'email': [this.contact.email,[Validators.required, FormValidator.emailValidator]],
      'createdAt': [this.contact.createdAt],
      'updatedAt': [this.contact.updatedAt]
    });
  }

  onSubmit() { 
    if (this.contactForm.valid, this.contactForm.controls['id'].value === this.contact.id) {
      this.contactCudApplicatifService
        .update(this.contact.id, this.contactForm.value)
        .subscribe(
          resp => {
            this.flashMessageService.success('Updated!!');
          },
          err => {
            this.flashMessageService.error('An error occured!!');
          }
        )
        ;
    }
  }
}

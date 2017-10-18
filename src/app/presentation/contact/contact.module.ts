import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactApplicatifService } from '../../service-applicatif/contact/contact-applicatif.service';
import { FlashMessageService } from '../../presentation/flash-message/flash-message.service';
import { ContactValidatorService } from '../../contrainte/validator/contact/contact-validator.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactComponent, ContactListComponent, ContactDetailComponent, ContactEditComponent, ContactNewComponent],
  providers: [ContactApplicatifService, FlashMessageService, ContactValidatorService]
})
export class ContactModule { }


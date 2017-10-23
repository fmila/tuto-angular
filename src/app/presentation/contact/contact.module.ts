import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { FlashMessageService } from '../../presentation/flash-message/flash-message.service';
import { ControlMessagesComponent } from '../control-messages/control-messages.component';
// Contact route module:
import { ContactRoutingModule } from "../../contrainte/config/contact/contact-routing.module";
import { ContactRootComponent } from './contact-root/contact-root.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  declarations: [ContactListComponent, ContactDetailComponent, ContactEditComponent, ContactNewComponent, ControlMessagesComponent, ContactRootComponent],
  providers: [
    FlashMessageService
  ]
})
export class ContactModule { }


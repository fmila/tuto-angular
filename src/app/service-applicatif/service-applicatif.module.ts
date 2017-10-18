import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactCudMetierService, ContactReadMetierService } from "../service-metier/contact/";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
        ContactCudMetierService,
        ContactReadMetierService        
  ]
})
export class ServiceApplicatifModule { }

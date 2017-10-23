import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactApplicatifServiceProviders } from "./contact/contact-applicatif.service.provider";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
        ...ContactApplicatifServiceProviders      
  ]
})
export class ServiceApplicatifModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactApplicatifServiceProviders } from "./contact/contact-applicatif.service.provider";
import { ContactFactoryService } from "../contrainte/factory/contact";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
        ...ContactApplicatifServiceProviders,
        ContactFactoryService      
  ]
})
export class ServiceApplicatifModule { }

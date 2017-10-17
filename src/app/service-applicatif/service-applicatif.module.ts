import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactMetierService } from "../service-metier/contact/contact-metier.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
        ContactMetierService        
  ]
})
export class ServiceApplicatifModule { }

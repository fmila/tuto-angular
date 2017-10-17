import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactMetierService } from './contact/contact-metier.service';
import { ContactBusinessDelegateService } from "../service-business-delegate/contact/contact-business-delegate.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ContactMetierService ],
  providers: [
        ContactBusinessDelegateService        
  ]
})
export class ServiceMetierModule { }

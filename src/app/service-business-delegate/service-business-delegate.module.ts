import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactBusinessDelegateService } from './contact/contact-business-delegate.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ ContactBusinessDelegateService ]
})
export class ServiceBusinessDelegateModule { }

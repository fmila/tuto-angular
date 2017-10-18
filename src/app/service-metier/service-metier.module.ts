import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCudBusinessDelegateService, ContactReadBusinessDelegateService } from "../service-business-delegate/contact/";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ContactCudBusinessDelegateService,
    ContactReadBusinessDelegateService
  ]
})
export class ServiceMetierModule { }

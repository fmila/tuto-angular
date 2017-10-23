import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMetierServiceProviders } from './contact/contact-metier.service.provider';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
     ...ContactMetierServiceProviders
  ] 
})
export class ServiceMetierModule { }

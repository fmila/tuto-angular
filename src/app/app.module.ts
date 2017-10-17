import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactModule } from './presentation/contact/contact.module';
import { HomeModule } from './presentation/home/home.module';
import { ServiceApplicatifModule } from './service-applicatif/service-applicatif.module';
import { ServiceMetierModule } from './service-metier/service-metier.module';
import { ServiceBusinessDelegateModule } from './service-business-delegate/service-business-delegate.module';
import { AppRoutingModule } from './contrainte/config/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    HomeModule,
    ServiceApplicatifModule,
    AppRoutingModule,
    ServiceBusinessDelegateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../../../presentation/_app/app.component';

// module presentation
import { ContactModule } from '../../../presentation/contact/contact.module';
import { HomeModule } from '../../../presentation/home/home.module';

// module service applicatif
import { ServiceApplicatifModule } from '../../../service-applicatif/service-applicatif.module';

// module service metier
import { ServiceMetierModule } from '../../../service-metier/service-metier.module';

// module service business delegate
import { ServiceBusinessDelegateModule } from '../../../service-business-delegate/service-business-delegate.module';

// module routing
import { AppRoutingModule } from './app-routing.module';

// component flash message
import { FlashMessageComponent } from '../../../presentation/flash-message/flash-message.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    HomeModule,
    ServiceApplicatifModule,
    ServiceMetierModule,
    AppRoutingModule,
    ServiceBusinessDelegateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

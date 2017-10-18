import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomeComponent } from '../../presentation/home/home.component';
import { ContactComponent } from '../../presentation/contact/contact.component';
import { ContactEditComponent } from '../../presentation/contact/contact-edit/contact-edit.component';
import { ContactNewComponent } from '../../presentation/contact/contact-new/contact-new.component';
import { ContactResolver } from './contact-resolver.service';
import { ContactCudBusinessDelegateService, ContactReadBusinessDelegateService } from "../../service-business-delegate/contact/";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { 
        path: 'contact-edit/:id', 
        component: ContactEditComponent,
        resolve: {
            contact : ContactResolver
        } 
    },
    { path: 'contact-new', component: ContactNewComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes), HttpModule ],
    exports: [ RouterModule ],
    providers: [ ContactResolver, ContactCudBusinessDelegateService, ContactReadBusinessDelegateService ]
})

export class AppRoutingModule {}
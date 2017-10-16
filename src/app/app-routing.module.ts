import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ContactResolver } from './services/resolver/contact-resolver.service';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact/contact-new/contact-new.component';

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
    providers: [ ContactResolver ]
})

export class AppRoutingModule {}
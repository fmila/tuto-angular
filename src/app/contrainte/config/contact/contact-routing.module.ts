import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components:
import { ContactRootComponent } from "../../../presentation/contact/contact-root/contact-root.component";
import { ContactListComponent } from '../../../presentation/contact/contact-list/contact-list.component';
import { ContactEditComponent } from '../../../presentation/contact/contact-edit/contact-edit.component';
import { ContactNewComponent } from '../../../presentation/contact/contact-new/contact-new.component';
import { ContactCudBusinessDelegateService, ContactReadBusinessDelegateService } from "../../../service-business-delegate/contact/";
// Route resolvers:
import { ContactResolver } from "./contact.resolver";

const routes: Routes = [
    {         
        path: 'contact',
        component: ContactRootComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ContactListComponent },
            { 
                path: 'edit/:id', 
                component: ContactEditComponent,
                resolve: {
                    contact : ContactResolver
                } 
            },
            { path: 'new', component: ContactNewComponent }
        ] 
    } ,   
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ ContactResolver ]
})
export class ContactRoutingModule { }
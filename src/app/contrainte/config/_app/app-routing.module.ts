import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomeComponent } from '../../../presentation/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes), HttpModule ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule {}
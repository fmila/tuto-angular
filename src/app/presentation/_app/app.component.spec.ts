import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';

// component flash message
import { FlashMessageComponent } from '../../presentation/flash-message/flash-message.component';
// module presentation
import { ContactModule } from '../../presentation/contact/contact.module';
import { HomeModule } from '../../presentation/home/home.module';

// module service applicatif
import { ServiceApplicatifModule } from '../../service-applicatif/service-applicatif.module';

// module service metier
import { ServiceMetierModule } from '../../service-metier/service-metier.module';

// module service business delegate
import { ServiceBusinessDelegateModule } from '../../service-business-delegate/service-business-delegate.module';

// module routing
import { AppRoutingModule } from '../../contrainte/config/_app/app-routing.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FlashMessageComponent
      ],
      imports: [
        AppRoutingModule,
        ContactModule,
        HomeModule,
        ServiceApplicatifModule,
        AppRoutingModule,
        ServiceBusinessDelegateModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});

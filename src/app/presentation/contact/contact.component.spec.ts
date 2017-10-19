import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCudApplicatifMockService, ContactCudApplicatifServiceACI, ContactReadApplicatifMockService, ContactReadApplicatifServiceACI } from '../../service-applicatif/contact/';
import { FlashMessageService } from '../../presentation/flash-message/flash-message.service';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ContactComponent, ContactListComponent, ContactDetailComponent ],
      providers: [
        { provide: ContactReadApplicatifServiceACI, useClass: ContactReadApplicatifMockService },
        { provide: ContactCudApplicatifServiceACI, useClass: ContactCudApplicatifMockService },
        FlashMessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactListComponent } from './contact-list.component';
import { ContactCudApplicatifMockService, ContactCudApplicatifServiceACI, ContactReadApplicatifMockService, ContactReadApplicatifServiceACI } from '../../../service-applicatif/contact/';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ContactListComponent ],
      providers: [
        { provide: ContactReadApplicatifServiceACI, useClass: ContactReadApplicatifMockService },
        { provide: ContactCudApplicatifServiceACI, useClass: ContactCudApplicatifMockService },
        FlashMessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

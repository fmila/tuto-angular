import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactListComponent } from './contact-list.component';
import { ContactApplicatifMockServiceProviders } from '../../../service-applicatif/contact/contact-applicatif.service.provider';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';
import { ContactDetailComponent } from "../contact-detail/contact-detail.component";
// custom pipe
import { DateToIsoPipe,HighlightDirective } from '../../../presentation/shared/';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ContactListComponent, ContactDetailComponent, DateToIsoPipe, HighlightDirective ],
      providers: [
        ContactApplicatifMockServiceProviders,
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

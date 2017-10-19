import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactNewComponent } from './contact-new.component';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';
import { ContactApplicatifMockServiceProviders } from '../../../service-applicatif/contact/';
import { ControlMessagesComponent } from '../../control-messages/control-messages.component';

describe('ContactNewComponent', () => {
  let component: ContactNewComponent;
  let fixture: ComponentFixture<ContactNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, ReactiveFormsModule ],
      declarations: [ ContactNewComponent, ControlMessagesComponent ],
      providers: [
        ContactApplicatifMockServiceProviders,
        FlashMessageService,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

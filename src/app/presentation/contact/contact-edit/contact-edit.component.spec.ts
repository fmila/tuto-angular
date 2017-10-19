import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { CONTACTS_DTO, ContactDto } from "../../../donnee/contact";
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';
import { ContactCudApplicatifMockService, ContactCudApplicatifServiceACI } from '../../../service-applicatif/contact/';
import { ContactEditComponent } from './contact-edit.component';
import { ControlMessagesComponent } from '../../control-messages/control-messages.component';

describe('ContactEditComponent', () => {
  let component: ContactEditComponent;
  let fixture: ComponentFixture<ContactEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, ReactiveFormsModule ],
      declarations: [ ContactEditComponent, ControlMessagesComponent ],
      providers: [
        { provide: ActivatedRoute,  useValue: { snapshot: { data: { contact: CONTACTS_DTO[0] } } } },
        { provide: ContactCudApplicatifServiceACI, useClass: ContactCudApplicatifMockService },
        FlashMessageService,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

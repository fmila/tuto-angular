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
  let contactCudApplicatifMockService: ContactCudApplicatifMockService;

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
    contactCudApplicatifMockService = fixture.debugElement.injector.get(ContactCudApplicatifServiceACI);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default props', fakeAsync(() => {
    expect(component.contact).toEqual(CONTACTS_DTO[0]);
  }));

  it('form value should update from form changes', fakeAsync(() => {
    let validContact = {
      id: CONTACTS_DTO[0].id,
      email: CONTACTS_DTO[0].email,
      lastName: CONTACTS_DTO[0].lastName,
      firstName: CONTACTS_DTO[0].firstName
    };
    updateForm(validContact.email, validContact.lastName, validContact.firstName);
    expect(component.contactForm.value).toEqual(validContact);
  }));

  it('isValid should be false when form is invalid', fakeAsync(() => {
    updateForm('t@', '', '');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it('should save modified contact when save button is clicked', fakeAsync(() => {
      const applicatifSpy = spyOn(contactCudApplicatifMockService, 'update').and.callThrough(); 
      let expectedModifiedContact: ContactDto = { id: 1, firstName: "Firstname modified", lastName: "Lastname modified", email: "t@t.com"};
      var editableProperties: string[] = ["firstName", "lastName", "email"];
      let inputs = fixture.nativeElement.querySelectorAll('input');
      editableProperties.forEach((prop, index) => {
          inputs[index].value = expectedModifiedContact[prop];            // Modify each field
          inputs[index].dispatchEvent(new Event('input'));
      });
      tick();
      fixture.detectChanges();
      fixture.nativeElement.querySelectorAll('button')[0].click();        // Click on save button
      expect(applicatifSpy).toHaveBeenCalledWith(expectedModifiedContact.id, expectedModifiedContact);  
  }));

  it('should update model on submit', fakeAsync(() => {
    let validContact = {
      id: CONTACTS_DTO[0].id,
      email: CONTACTS_DTO[0].email,
      lastName: CONTACTS_DTO[0].lastName,
      firstName: CONTACTS_DTO[0].firstName
    };
    component.onSubmit();
    expect(component.contact).toEqual(validContact);
  }));

  // create reusable function for a dry spec.
  function updateForm(email, lastName, firstname) {
    component.contactForm.controls['email'].setValue(email);
    component.contactForm.controls['lastName'].setValue(lastName);
    component.contactForm.controls['firstName'].setValue(firstname);
  }
});

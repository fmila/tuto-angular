import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactValidatorService } from '../../../contrainte/validator/contact/contact-validator.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent {

  errorMessage: string;
  @Input() control: FormControl;
  
  constructor() { }

  geErrorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ContactValidatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }
}

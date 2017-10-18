import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '../../contrainte/validator/form-validator';

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
        return FormValidator.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }
}

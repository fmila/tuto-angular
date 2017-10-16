import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../contact';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  contact: Contact;
  id: number;
  error: boolean = false;
  submitted: boolean = false;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.contact = new Contact();
  }

  onSubmit() { 
    this.http
      .post(environment.wsContactNewUrl,JSON.stringify(this.contact))
      .subscribe(
        resp => {
          this.submitted = true;
          this.error = false;
        },
        err => {
          this.error = true;
        }
      )
      ;
  }

}

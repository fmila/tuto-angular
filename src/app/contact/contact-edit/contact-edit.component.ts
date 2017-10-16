import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { environment } from '../../../environments/environment';
import { ContactObservableService } from '../../services/contact/contact-observable.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  providers: [ContactObservableService]
})
export class ContactEditComponent implements OnInit {

  contact: Contact;
  id: number;
  error: boolean = false;
  submitted: boolean = false;

  constructor(private route: ActivatedRoute, private contactObservableService: ContactObservableService) {
    
  }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }

  onSubmit() { 
    this.contactObservableService
      .update(environment.wsContactUpdateUrl + this.contact.id, this.contact)
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

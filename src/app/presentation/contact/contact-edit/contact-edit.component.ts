import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  providers: [ContactApplicatifService]
})
export class ContactEditComponent implements OnInit {

  contact: ContactDto;
  id: number;
  error: boolean = false;
  submitted: boolean = false;

  constructor(private route: ActivatedRoute, private contactApplicatifService: ContactApplicatifService) {
    
  }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }

  onSubmit() { 
    this.contactApplicatifService
      .update(this.contact.id, this.contact)
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

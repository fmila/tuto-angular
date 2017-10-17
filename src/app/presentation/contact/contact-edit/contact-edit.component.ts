import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';
import { FlashMessageService } from '../../../presentation/flash-message/flash-message.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact: ContactDto;

  constructor(private route: ActivatedRoute, private contactApplicatifService: ContactApplicatifService, private flashMessageService : FlashMessageService) {
    
  }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }

  onSubmit() { 
    this.contactApplicatifService
      .update(this.contact.id, this.contact)
      .subscribe(
        resp => {
          this.flashMessageService.success('Updated!!', );
        },
        err => {
          this.flashMessageService.error('An error occured!!');
        }
      )
      ;
  }
}

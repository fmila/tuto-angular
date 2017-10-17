import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ContactDto } from "../../../donnee/contact/contact-dto";
import { ContactApplicatifService } from '../../../service-applicatif/contact/contact-applicatif.service';
import { FlashMessageService } from '../../../contrainte/commun/flash-message.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  providers: [ContactApplicatifService]
})
export class ContactEditComponent implements OnInit, OnDestroy {

  contact: ContactDto;
  message = null;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private contactApplicatifService: ContactApplicatifService, private flashMessageService : FlashMessageService) {
    
  }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
    this.subscription = this.flashMessageService.getMessage().subscribe(message => {
        this.message = message;
    });
  }

  onSubmit() { 
    this.contactApplicatifService
      .update(this.contact.id, this.contact)
      .subscribe(
        resp => {
          this.flashMessageService.setMessage('Updated!!', 1);
        },
        err => {
          this.flashMessageService.setMessage('An error occured!!', 2);
        }
      )
      ;
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

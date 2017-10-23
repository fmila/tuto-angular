import { Observable } from 'rxjs/Observable';
import { ContactDto } from '../../donnee/contact/contact-dto';

export abstract class ContactReadBusinessDelegateServiceACI {
    public abstract find(id: number): Observable<ContactDto>
    public abstract findAll(): Observable<ContactDto[]>;
}
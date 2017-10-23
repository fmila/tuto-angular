import { ContactDto } from "../../donnee/contact/contact-dto";
import { Observable } from 'rxjs/Observable';

export abstract class ContactCudMetierServiceACI {

    public abstract create(contact: ContactDto): Observable<any>;

    public abstract update(id: number,contact: ContactDto): Observable<any>;

    public abstract delete(id: number): Observable<any>
}
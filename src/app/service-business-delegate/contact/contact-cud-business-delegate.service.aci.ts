import { ContactDto } from "../../donnee/contact";
import { Observable } from 'rxjs/Observable';

export abstract class ContactCudBusinessDelegateServiceACI {
    public abstract create(param: any): Observable<any>;
    public abstract update(id: number, param: any): Observable<any>;
    public abstract delete(id: number): Observable<any>;
}

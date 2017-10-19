import { Observable } from 'rxjs/Observable';

export abstract class ContactReadApplicatifServiceACI {

    public abstract find(id: number): Observable<any>;

    public abstract findAll(): Observable<any>
}
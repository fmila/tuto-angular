import { Observable } from 'rxjs/Observable';

export interface IContactReadApplicatifService {

    find(id: number): Observable<any>;

    findAll(): Observable<any>
}
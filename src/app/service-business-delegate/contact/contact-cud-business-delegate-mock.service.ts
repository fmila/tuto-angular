import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactCudBusinessDelegateMockService {

    constructor() { }

    create(param: any): Observable<any> {
        return Observable.of<boolean>(true);        
    }

    update(id: number, param: any): Observable<any> {
        return Observable.of<boolean>(true);
    }

    delete(id: number): Observable<any> {
        return Observable.of<boolean>(true);
    }
}

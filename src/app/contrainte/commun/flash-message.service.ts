import { Injectable }      from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class FlashMessageService {
    message: BehaviorSubject<any> = new BehaviorSubject({});
    constructor() { }

    setMessage(message: string, type: number) {
        this.message.next({ text: message, type: type });
    }  

    clearMessage() {
        this.message.next({});
    }

    getMessage(): Observable<any> {
        return this.message.asObservable();
    }
}
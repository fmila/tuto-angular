import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateToIso' })
export class DateToIsoPipe implements PipeTransform {
    transform(value: string) {
        let date = value.split('T');
        if (date.length > 0) {
            let newValue = new Date(date[0]).toLocaleDateString('en-GB', {
                day : 'numeric',
                month : 'short',
                year : 'numeric'
            }).split(' ').join('-');
            return newValue;
        }
        return '';
    }
}
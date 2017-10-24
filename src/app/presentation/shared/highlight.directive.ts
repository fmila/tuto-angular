/** Highlight the attached element or an InputElement in blue */

import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight], input' })
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'powderblue';
    }
}


import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MetodoService } from './metodo.service'


@Directive({
  selector: '[appCounterClick]'
})
export class CounterClickDirective {

constructor(private el: ElementRef, private MetodoService: MetodoService) { }
 

}

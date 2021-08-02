import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetodoService {
  public counter = 0;
  constructor() { }
 


  theyClickedMe(): void {
    this.counter++;
    console.log('Por ahora llevamos ', this.counter);
  }


}

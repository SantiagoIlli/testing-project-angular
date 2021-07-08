import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetodoService {
  public counter = 0;
  constructor() { }
  public arraySrc = [
    "https://miracomosehace.com/wp-content/uploads/2020/03/modificar-url-facebook.jpg",
    "https://miracomosehace.com/wp-content/uploads/2020/03/modificar-url-facebook.jpg",
    "https://miracomosehace.com/wp-content/uploads/2020/03/modificar-url-facebook.jpg"
  ]


  theyClickedMe(): void {
    this.counter++;
    console.log('Por ahora llevamos ', this.counter);
  }


}

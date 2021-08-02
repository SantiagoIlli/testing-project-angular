import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class layOutService {

  constructor() { }

public isColumn:boolean=true;
public align:string = "row";


changeDirection() {
    this.isColumn=!this.isColumn;
    console.log(this.isColumn);
}

currentAlign() {
 if(!this.isColumn){
   this.align="column";
 } else {
   this.align="row";
 }console.log(this.align);

} 



}

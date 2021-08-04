import {Component, ElementRef, OnInit, Output, EventEmitter, Input} from '@angular/core'
import {MetodoService} from '../metodo.service'

@Component({
  selector: 'app-button-rodri',
  templateUrl: './button-rodri.component.html',
  styleUrls: ['./button-rodri.component.scss'],
  providers: [MetodoService]
})

export class ButtonRodriComponent implements OnInit {

  
  constructor(private element: ElementRef, private MetodoService: MetodoService) { }
  

  ngOnInit(): void {     
  }

  
  @Input() imagen:string;
  @Input() selected:boolean=false;
  @Input() id:number;
  @Output() onChangeShape: EventEmitter<number> = new EventEmitter<number>()
  
  changeShapeEmit() {
    this.onChangeShape.emit(this.id);
    console.log(this.id);
  } 
  
 
  
}


  
  


  


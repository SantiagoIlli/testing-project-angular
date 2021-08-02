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
  
  @Output() Click = new EventEmitter(); 
  ngOnInit(): void {
        
  }
  

  @Input() imagen:string;
  @Input() imgShape:string="globalSize";

  changeShape() {
    this.imgShape="irregularSize";
  }
  
  reShape() {
    this.imgShape="globalSize";

  }

  }


  


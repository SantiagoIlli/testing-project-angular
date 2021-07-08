import {Component, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core'
import {MetodoService} from '../metodo.service'

@Component({
  selector: 'app-button-rodri',
  templateUrl: './button-rodri.component.html',
  styleUrls: ['./button-rodri.component.scss'],
  providers: [MetodoService]
})

export class ButtonRodriComponent implements OnInit {

  @Input() counter: number; 
  constructor(private element: ElementRef) { }
  
  @Output() Click = new EventEmitter(); 
  ngOnInit(): void {
    
  }
  
  CountClick() {
    this.Click.emit(this.counter);
  }
  
    
  }


  


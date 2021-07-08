import {Component, ElementRef, OnInit} from '@angular/core'
import {MetodoService} from '../metodo.service'

@Component({
  selector: 'app-button-rodri',
  templateUrl: './button-rodri.component.html',
  styleUrls: ['./button-rodri.component.scss'],
  providers: [MetodoService]
})

export class ButtonRodriComponent implements OnInit {


  constructor(private element: ElementRef, private MetodoService:MetodoService) { }

  ngOnInit(): void {
    console.log('Me instanciaron', this.element);
  }
  public counter = this.MetodoService.counter;
  public arraySrc = this.MetodoService.arraySrc;

  CountClick(): void {
    this.MetodoService.theyClickedMe() 
  }
    
  }


  


  import {Component, ElementRef, OnInit, Input} from '@angular/core'
  import {MetodoService} from '../metodo.service'
  import {suma} from '../functions/utils'
  import {ButtonRodriInfo} from '../models/types'

  @Component({
  selector: 'app-button-rodri',
  templateUrl: './button-rodri.component.html',
  styleUrls: ['./button-rodri.component.scss'],
  providers: [MetodoService]
  })  
  
  export class ButtonRodriComponent implements OnInit {
  
  @Input() isSelected:boolean;
  @Input() element:ButtonRodriInfo;
  @Input() leyenda:string;
  
  
  constructor(private MetodoService: MetodoService) { }
  
  ngOnInit(): void {   

  }
  
  
   
  
  //formula emisora con respectiva variable y tipo de variable
}


  



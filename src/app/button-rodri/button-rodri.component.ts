import {Component, ElementRef, OnInit, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core'
import {MetodoService} from '../metodo.service'

@Component({
  selector: 'app-button-rodri',
  templateUrl: './button-rodri.component.html',
  styleUrls: ['./button-rodri.component.scss'],
  providers: [MetodoService]
})

export class ButtonRodriComponent implements OnInit {

  @Input() image: string;
  @Input() obj: {
    value: number
  };

  @Output() Click = new EventEmitter();
  constructor(private element: ElementRef,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  countClick(): void {
    this.obj.value++;
    console.log('La cuenta va: ' + this.obj.value);
    this.cdr.detectChanges();
    // this.Click.emit();
  }


  }





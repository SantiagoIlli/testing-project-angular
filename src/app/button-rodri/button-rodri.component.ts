import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-rodri',
  templateUrl: './button-rodri.component.html',
  styleUrls: ['./button-rodri.component.scss']
})
export class ButtonRodriComponent implements OnInit {

  public counter = 0;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    console.log('Me instanciaron', this.element);
  }

  theyClickedMe(): void {
    this.counter++;
    console.log('Por ahora llevamos ', this.counter);
  }
}

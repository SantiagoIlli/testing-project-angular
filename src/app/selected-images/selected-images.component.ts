import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {ButtonRodriInfo} from '../models/types'

@Component({
  selector: 'app-selected-images',
  templateUrl: './selected-images.component.html',
  styleUrls: ['./selected-images.component.scss']
})
export class SelectedImagesComponent implements OnInit {
  


  @Input() isSelected:boolean;
 
  @Input() element:ButtonRodriInfo;
  constructor(private elementRef:ElementRef) { }
  
  scrollIntoMe2() {
    this.elementRef.nativeElement.scrollIntoView({
      behaviour:"smooth",
      inline:"end"
    });
  }

  ngOnInit(): void {
  }

}

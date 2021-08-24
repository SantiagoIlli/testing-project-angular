import { Component, Input, QueryList, ViewChildren, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { MetodoService } from './metodo.service';
import { layOutService } from './layout.service';
import { ChangeDetectorRef } from '@angular/core';
import { ButtonRodriComponent } from './button-rodri/button-rodri.component';
import { ButtonRodriInfo } from './models/types';
import { trigger, state, style, animate, transition } from '@angular/animations';
import anime from 'animejs/lib/anime.es.js';
import { translate } from '@ngneat/transloco';
import { TimerOxService } from 'ox-core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { SelectedImagesComponent } from './selected-images/selected-images.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    //trigger('')
  ]
 })

  export class AppComponent implements AfterViewInit{
  title = 'testing-project';

  
  @ViewChildren(ButtonRodriComponent) allButtonRodriComponents: QueryList<ButtonRodriComponent>;
  
  @ViewChildren(SelectedImagesComponent) allSelectedImages :QueryList<SelectedImagesComponent>

  @ViewChild("appScroll") appScroll:ElementRef;
  
  @ViewChild("appRodri") appRodri:ElementRef;
  //es static salvo que este controlado por el ngif



  public arraySrc: ButtonRodriInfo[] = [{
    src: "https://www.freejpg.com.ar/asset/400/de/def1/F100027556.jpg", selected: false, leyenda: "Machu Picchu", xAxis: 105
  }, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmFjdxDPxvUyNuOiVYBYFI9HsqVYkwusHVA&usqp=CAU", selected: false, leyenda: "Blanco", xAxis: 315
  }, {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b6/aa/b9/white-desert.jpg?w=900&h=-1&s=1", selected: false, leyenda: "Desert", xAxis: 525
  }, {
    src: "https://www.sgsgroup.com.ar/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg", selected: false, leyenda: "Bosque verde", xAxis: 735
  }, {
    src: "https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C", selected: false, leyenda: "Bosque luminoso", xAxis: 945
  }, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZCcmGJFEvwpBGbfQn2F3ZbE0I1ODTBBrf0x7YbWms7wgtd3ntzfiZ9EPEX7th1x8EBw&usqp=CAU", selected: false, leyenda: "Mar celeste", xAxis: 1155
  }, {
    src: "https://besthqwallpapers.com/Uploads/7-2-2018/39763/thumb2-sunset-sea-landscape-waves-calm-sky.jpg", selected: false, leyenda: "Calm Sky", xAxis: 1365
  }, {
    src: "https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg", selected: false, leyenda: "All Mountain", xAxis: 1575
  }, {
    src: "https://p4.wallpaperbetter.com/wallpaper/397/37/201/lion-4k-beautiful-wallpaper-preview.jpg", selected: false, leyenda: "Lion", xAxis: 1785
  }, {
    src: "https://media.staticontent.com/media/pictures/b4647122-d6b5-4b17-845c-89621ecd1c63/500x600", selected: false, leyenda: "Peaceful Beach", xAxis: 1995
  }, {
    src: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/china-nepal-llegan-acuerdo-fin-sabemos-altura-exacta-everest-2163191.jpg", selected: false, leyenda: "Everest", xAxis: 2205
  }, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzFLlv8Biv-3TN6c6efBU9vC-7AJQqgpvxw&usqp=CAU", selected: false, leyenda: "Aurora Boreal", xAxis: 2415
  }, {
    src: "https://assets.wego.com/image/upload/v1611848131/country-pages/no.jpg", selected: false, leyenda: "Nowhere Town", xAxis: 2625
  }, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4SzCDuH9M95MopGSzFY9OcaBb2knWLOwcQ&usqp=CAU", selected: false, leyenda: "Norway", xAxis: 2835
  }, {
    src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F02%2Fyakushima-forest-japan-FORESTBATH0217.jpg", selected: false, leyenda: "Mysterious Forest", xAxis: 3045
  }, {
    src: "https://efi.int/sites/default/files/styles/max_960_wide/public/images/articles/2021/MFRA-2030_featurephoto_SIW2.jpg?itok=M3zC-ZTU", selected: false, leyenda: "Awakening Forest", xAxis: 3255
  }
  ]

  

  public appB = document.getElementById("app-scroll");
  public selectedImages: ButtonRodriInfo[] = [];
  public positionSel: number = 525;
  public positionImg: number;
  //cambiar el false a true
  //el el selected siguen vinculados
  //
  private isColumn = this.layOutService.isColumn;
  public i: number = 0;
  public t: number = 5;
  public truers: Array<ButtonRodriInfo> = []
  public buttonDisableL:boolean = true;
  public buttonDisableR:boolean = false;
  constructor(private MetodoService: MetodoService, public layOutService: layOutService,
    private cdr: ChangeDetectorRef) {
  }



  // @Input("align") align:string =// this.layOutService.align;

  counter: number = 0;
  public ngIfValue: boolean;

  ngAfterViewInit():void{
  }



changeNgIfValue(): void {
    this.ngIfValue = !this.ngIfValue;
    console.log('funciona', this.ngIfValue);
}
  
  

@HostListener('document:keydown')
asdasdas() {
  console.log('testS')
  this.appScroll.nativeElement.scrollTo(-500,0);
}



disableButton() {
  const cuestionLengthMax = this.t <= this.arraySrc.length-5;
  const cuestionLengthMin = this.t > 0;
  this.buttonDisableR=!cuestionLengthMax;
  this.buttonDisableL=!cuestionLengthMin;
}


 scrollToL():void
 {
  if(this.t>0) 
  {
   this.t-=5; 
   this.scrollIntoComponent();
   this.disableButton();
 } 
 console.log(this.t);
}


  private scrollIntoComponent() {
    this.allButtonRodriComponents.toArray()[this.t].scrollIntoMe2();
  }

  private autoScrollView(i) {
    this.allButtonRodriComponents.toArray()[i].scrollIntoMe();
  } 



 scrollToR():void
 {
 const measureDisable = (this.arraySrc.length-5>this.t);
 if (measureDisable)
 {
  this.t+=5;
  this.scrollIntoComponent();
  this.disableButton();
  }
  console.log(this.t);
 }

    
 /* scrollTo(right: boolea) {
    console.log("hola");
   this.t += right ? -1050 : 1050;
    anime({
      targets: this.appScroll.nativeElement,
      scrollBy: (this.t,0),
      easing: 'easeInOutSine'
    })
   }*/
   
   selectedImage2(i)
    {
     const selImage = this.arraySrc[i];
     if (this.selectedImages.length < 5 && !selImage.selected) {
       this.selectedImages.push(selImage);
       selImage.selected=true;
     } else {
      this.selectedImages = this.selectedImages.filter(e => e !== selImage);
      selImage.selected = false;
    }
   }

 /* scrollRight() {
    if(this.t>-(220*(this.arraySrc.length-2)))
    {
    this.scrollTo(true)
    this.positionSel * 2;
    this.buttonDisableL= false;  
    } 
    if(this.t<=-(220*(this.arraySrc.length-2)))
    {
    this.buttonDisableR=true;
    }
 }*/

 /* scrollLeft() 
  {
    if(this.t<=-1050){
    this.scrollTo(false);
    this.positionSel / 2;
    this.buttonDisableR= false;
    }if( this.t>-1050){
     this.buttonDisableL=true;
    }
  }
  */


  automaticScroll(i) {
    const indexArraySrc = this.arraySrc.indexOf(i);
    this.autoScrollView(indexArraySrc);
    /*anime({
      targets: "app-button-rodri",
      translateX: this.positionSel - positionImg,
      easing: 'easeInOutSine'
    })*/
    if(indexArraySrc<=0)
    console.log(indexArraySrc);
  }


  public changeDir(): void {
    this.layOutService.changeDirection();
    this.cdr.detectChanges();
  }


}



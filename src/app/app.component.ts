import { Component, Input, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { MetodoService } from './metodo.service';
import { layOutService } from './layout.service';
import { ChangeDetectorRef } from '@angular/core';
import { ButtonRodriComponent } from './button-rodri/button-rodri.component';
import { ButtonRodriInfo } from './models/types';
import { trigger, state, style, animate, transition } from '@angular/animations';
import anime from 'animejs/lib/anime.es.js';
import { translate } from '@ngneat/transloco';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    //trigger('')
  ]
})


export class AppComponent {
  title = 'testing-project';


  @ViewChildren(ButtonRodriComponent) allButtonRodriComponents: QueryList<ButtonRodriComponent>;


  public arraySrc: ButtonRodriInfo[] =
    [{
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


  public selectedImages: ButtonRodriInfo[] = [];
  public positionSel: number = 525;
  public positionImg: number;
  public limitSup:number = -(this.arraySrc.length * 210 - 1050);
  //cambiar el false a true
  //el el selected siguen vinculados
  //
  private isColumn = this.layOutService.isColumn;
  public i: number = 0;
  public xAxisMov: number = 0;
  public truers: Array<ButtonRodriInfo> = []
  public buttonDisableL: boolean = true;
  public buttonDisableR: boolean = false;
  constructor(private MetodoService: MetodoService, public layOutService: layOutService,
    private cdr: ChangeDetectorRef) { }

  // @Input("align") align:string =// this.layOutService.align;


  ngOnChanges(): void {
  }


  counter: number = 0;
  public ngIfValue: boolean;


  changeNgIfValue(): void {
    this.ngIfValue = !this.ngIfValue;
    console.log('funciona', this.ngIfValue);
  }


  /*scrollTo(right: boolean) 
  {
    this.xAxisMov += right ? -1050 : 1050;
    anime({
      targets: ".cont-absolute",
      left: this.xAxisMov,
      easing: 'easeInOutSine'
  })
    console.log(this.xAxisMov);
  }*/

  /*selectedImage(i) {
  const selIm = this.arraySrc[i];
  if (this.selectedImages.length < 5) {
    if (!selIm.selected) {
      this.selectedImages.push(selIm);
  } 
  else
  {
      this.selectedImages = this.selectedImages.filter(e => e !== selIm);
  }
    selIm.selected = !selIm.selected;
  } 
    else 
  {
    this.selectedImages = this.selectedImages.filter(e => e !== selIm);
    selIm.selected = false;
  }   
  }*/


  selectedImage2(i) {
    const selImage = this.arraySrc[i];
    if (this.selectedImages.length < 5 && !selImage.selected) {
      this.selectedImages.push(selImage);
      selImage.selected = true;
    } else {
      this.selectedImages = this.selectedImages.filter(e => e !== selImage);
      selImage.selected = false;
    }
  }



  disableButton() 
  {
    const valuatorMax = this.xAxisMov > this.limitSup;
    const valuatorMin = this.xAxisMov < 0;
    this.buttonDisableL = !valuatorMin;
    this.buttonDisableR = !valuatorMax;
  }



   scrollRight() 
   {
   /* const valuator = this.xAxisMov > - (220 * (this.arraySrc.length - 10))
    if (valuator){
      this.xAxisMov -= 1050;
   }
    if(!valuator){
      this.xAxisMov = -2310;
   } */
   //const xAxisPositivo = this.xAxisMov > - 220( * (this.arraySrc.length - 10));
   // this.xAxisMov += xAxisPositivo ? -1050 : -(this.arraySrc.length*220-this.xAxisMov);
   /*if(xAxisMax===this.xAxisMov){
      this.xAxisMov-=1050;
   } else {
     this.xAxisMov=-2310;
   }*/
   this.xAxisMov = Math.max(this.xAxisMov-1050, this.limitSup);
   anime({
      targets: ".cont-absolute",
      left: this.xAxisMov,
      easing: 'easeInOutSine'
   })
    this.disableButton();
    console.log(this.xAxisMov);
   }




scrollLeft() {
/*  if (this.xAxisMov <= -1050) {
      this.xAxisMov += 1050 ;
      //this.scrollTo(false);
    } if(this.xAxisMov>-1050) {
      this.xAxisMov = 0; 
    }*/

 //const xAxisPositivo = this.xAxisMov > -1050;
 //this.xAxisMov += xAxisositivo ? -this.xAxisMov : 1050;

/*if(xAxisMin>=this.xAxisMov){
  this.xAxisMov+=1050;
} else{
  this.xAxisMov=0;
}*/

this.xAxisMov = Math.min(this.xAxisMov+1050, 0);
    anime({
      targets: ".cont-absolute",
      left: this.xAxisMov,
      easing: 'easeInOutSine'
  })
  console.log(this.xAxisMov);
  this.disableButton();
  }


  public changeShape(i): void {
    // const selectedElement = this.arraySrc[i];
    // selectedElement.selected = !selectedElement.selected;
    // this.truers.push(selectedElement);
    // const n = 2;
    // this.truers = this.truers.filter(z => z.selected);
    // const filterFunc : (number)=> boolean = index => index >= this.truers.length - n
    // const toFalse = this.truers.filter((z, index) =>  !filterFunc(index) ); 
    // this.truers = this.truers.filter((z, index) =>  filterFunc(index) );
    // toFalse.forEach(z=> z.selected=false);
    // if (this.truers.length > 2)
    //  {
    //   this.truers[0].selected = false;
    //   this.truers.shift();
    // }
    console.log(this.truers);
    // for(let t = 0; t<2;t++){
    //console.log(this.truers[t].selected);
  }


    // automaticScroll(n,m) {
    // this.xAxisMov = (Math.min(Math.max(this.xAxisMov-n,this.limitSup)+m,0));
    automaticScroll(newValue: number) {
    this.xAxisMov = (Math.min(Math.max(newValue,this.limitSup),0));
    anime({
      targets: ".cont-absolute",
      left: this.xAxisMov,
      easing: 'easeInOutSine'
     })
    console.log(this.xAxisMov);
    console.log(this.positionImg);
    //this.t -= ((positionImg-110) + this.t)    
    this.disableButton()
  }


  public changeDir(): void {
    this.layOutService.changeDirection();
    this.cdr.detectChanges();
  }

}



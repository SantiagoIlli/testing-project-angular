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
  


  public arraySrc: ButtonRodriInfo[] = [{
    src: "https://www.freejpg.com.ar/asset/400/de/def1/F100027556.jpg", selected: false, leyenda: "Machu Picchu", xAxis: 105, id:0
  }, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmFjdxDPxvUyNuOiVYBYFI9HsqVYkwusHVA&usqp=CAU", selected: false, leyenda: "Blanco", xAxis: 315, id:1
  }, {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b6/aa/b9/white-desert.jpg?w=900&h=-1&s=1", selected: false, leyenda: "Desert", xAxis: 525, id:2
  }, {
    src: "https://www.sgsgroup.com.ar/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg", selected: false, leyenda: "Bosque verde", xAxis: 735, id:3
  }, {
    src: "https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C", selected: false, leyenda: "Bosque luminoso", xAxis: 945, id:4
  }, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZCcmGJFEvwpBGbfQn2F3ZbE0I1ODTBBrf0x7YbWms7wgtd3ntzfiZ9EPEX7th1x8EBw&usqp=CAU", selected: false, leyenda: "Mar celeste", xAxis: 1155, id:5
  }, {
    src: "https://besthqwallpapers.com/Uploads/7-2-2018/39763/thumb2-sunset-sea-landscape-waves-calm-sky.jpg", selected: false, leyenda: "Calm Sky", xAxis: 1365, id:6
  }, {
    src: "https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg", selected: false, leyenda: "All Mountain", xAxis: 1575, id:7
  }, {
    src: "https://p4.wallpaperbetter.com/wallpaper/397/37/201/lion-4k-beautiful-wallpaper-preview.jpg", selected: false, leyenda: "Lion", xAxis: 1785, id:8
  }, {
    src: "https://media.staticontent.com/media/pictures/b4647122-d6b5-4b17-845c-89621ecd1c63/500x600", selected: false, leyenda: "Peaceful Beach", xAxis: 1995, id:9
  }, {
    src: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/china-nepal-llegan-acuerdo-fin-sabemos-altura-exacta-everest-2163191.jpg", selected: false, leyenda: "Everest", xAxis: 2205, id:10
  }, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzFLlv8Biv-3TN6c6efBU9vC-7AJQqgpvxw&usqp=CAU", selected: false, leyenda: "Aurora Boreal", xAxis: 2415, id:11
  }, {
    src: "https://assets.wego.com/image/upload/v1611848131/country-pages/no.jpg", selected: false, leyenda: "Nowhere Town", xAxis: 2625, id:12
  }, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4SzCDuH9M95MopGSzFY9OcaBb2knWLOwcQ&usqp=CAU", selected: false, leyenda: "Norway", xAxis: 2835, id:13
  }, {
    src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F02%2Fyakushima-forest-japan-FORESTBATH0217.jpg", selected: false, leyenda: "Mysterious Forest", xAxis: 3045, id:14
  }, {
    src: "https://efi.int/sites/default/files/styles/max_960_wide/public/images/articles/2021/MFRA-2030_featurephoto_SIW2.jpg?itok=M3zC-ZTU", selected: false, leyenda: "Awakening Forest", xAxis: 3255, id:15
  }
  ]

  
  
  public selectedImages: ButtonRodriInfo[] = [];
  public positionSel: number = 520;
  public positionImg: number;
  public posI:number = 0;
  public posF:number = 5;
  public arraySrcRed: ButtonRodriInfo[] = this.arraySrc.filter((z,index:number) => index >= this.posI && index < this.posF)
  public add:number=0;
  //cambiar el false a true
  //el el selected siguen vinculados
  //
  private isColumn = this.layOutService.isColumn;
  public i: number = 0;
  public t: number = 0;
  public truers: Array<ButtonRodriInfo> = []
  public buttonDisableL:boolean=true;
  public buttonDisableR:boolean=false;

  constructor(private MetodoService: MetodoService, public layOutService: layOutService,
    private cdr: ChangeDetectorRef) {
  }

  // @Input("align") align:string =// this.layOutService.align;




  counter: number = 0;
  public ngIfValue: boolean;



  changeNgIfValue(): void {
    this.ngIfValue = !this.ngIfValue;
    console.log('funciona', this.ngIfValue);
  }

  
    
  scrollRight() {
  if(this.posI<=10){
   this.posI+=5;
   this.posF+=5;
   this.updateArraySrc();
   this.arrowState();
   } 
  }
   


  private updateArraySrc() {
    this.arraySrcRed = this.arraySrc.slice(this.posI,this.posF);
   // this.arraySrcReds = this.arraySrc.filter((z, index: number) => index >= this.posI && index < this.posF);
  }


  scrollLeft()
   {
    if(this.posI>=5){
    this.posI-=5;
    this.posF-=5;
    } 
    if (this.posI<5 && this.posI>=0) {
      this.posI=0;
      this.posF=5;
    }
    this.updateArraySrc();
    this.arrowState();
   
    }


    arrowState(){        
      this.buttonDisableL = this.posI===0;
      this.buttonDisableR = this.posF>=this.arraySrc.length;     
    }
    
    
  automaticScroll(element: ButtonRodriInfo) {
    const i = this.arraySrc.indexOf(element);
    this.posI = Math.max(Math.min(i, this.arraySrc.length-5, i-2), 0)
    this.posF = this.posI+5;
    this.updateArraySrc();
    this.arrowState();
    console.log(i);
  }


 /* selectedImage(i) {
    const selIm = this.arraySrc[i];
    
    if (this.selectedImages.length < 5) {
      if (!selIm.selected) {
        this.selectedImages.push(selIm);
    } else {
        this.selectedImages = this.selectedImages.filter(e => e !== selIm);
    }
      selIm.selected = !selIm.selected;
    } 
      else {
      this.selectedImages = this.selectedImages.filter(e => e !== selIm);
      selIm.selected = false;
    }   
  }
*/

   
   selectedImage2(i) {
     const selImage = this.arraySrcRed[i];
     if (this.selectedImages.length < 5 && !selImage.selected) {
       this.selectedImages.push(selImage);
       selImage.selected=true;
     } else {
      this.selectedImages = this.selectedImages.filter(e => e !== selImage);
      selImage.selected = false;
     }
   }

 

  /*scrollRight() {
    if(this.t>-(220*(this.arraySrc.length-2)))
    {
    this.scrollTo(true)
    this.positionSel * 2;
    this.buttonDisableL= false;
    
    } 
    if(this.t<-(220*(this.arraySrc.length-2)))
    {
    this.buttonDisableR=true;
    console.log(this.t>-(220*(this.arraySrc.length)-2));
    }
    } */



 /* scrollLeft() 
  {
    console.log(this.t);
    if(this.t<=-1050){
   
    this.positionSel / 2;
    this.buttonDisableR= false;
    }if( this.t>-1050){
     this.buttonDisableL=true;
    }
  } 

*/


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



// 5 // 2                       
   /*if(extremoSup===this.arraySrc.length || 2===(this.arraySrc.length-i)){
    this.posI=this.arraySrc.length-5
    this.posF=this.arraySrc.length;
   }
   else if (i<=1){
    this.posI=0;
    this.posF=5;
   }
   else{
    this.posI=i-2;
    this.posF=i+3;
   } /
   
   /*switch(i){
    case 0:
      this.posI=i;
      this.posF=i+5;
      console.log("c1");
      break;
    case 1:
      this.posI=i-1;
      this.posF=i+4;
      console.log("c2");
      break;
    case 14:
      this.posI=i-3;
      this.posF=i+2;
      console.log("c14");
      break;
    case 15:
      this.posI=i-4;
      this.posF=i+1;
      console.log("c15")
      break;
    default:
      this.posI=i-2;
      this.posF=i+3;
      console.log("default");
    } */
    


 

  public changeDir(): void {
    this.layOutService.changeDirection();
    this.cdr.detectChanges();
  }

}



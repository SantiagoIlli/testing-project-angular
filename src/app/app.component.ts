import { Component, Input } from '@angular/core';
import { MetodoService } from './metodo.service';
import { layOutService } from './layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-project';
  
  constructor(private MetodoService: MetodoService, private layOutService: layOutService) { }

  public arraySrc = [
    "https://www.freejpg.com.ar/asset/400/de/def1/F100027556.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmFjdxDPxvUyNuOiVYBYFI9HsqVYkwusHVA&usqp=CAU",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b6/aa/b9/white-desert.jpg?w=900&h=-1&s=1",
    "https://www.sgsgroup.com.ar/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg",
    "https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZCcmGJFEvwpBGbfQn2F3ZbE0I1ODTBBrf0x7YbWms7wgtd3ntzfiZ9EPEX7th1x8EBw&usqp=CAU",
    "https://besthqwallpapers.com/Uploads/7-2-2018/39763/thumb2-sunset-sea-landscape-waves-calm-sky.jpg",
    "https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg"
  ]
  
  private isColumn = this.layOutService.isColumn;
  @Input("align") align:string = this.layOutService.align;



  counter:number = 0;
  public ngIfValue: boolean;

  changeNgIfValue(): void {
    this.ngIfValue = !this.ngIfValue;
    console.log('fuinciona', this.ngIfValue);
  }
  
  public counterClick():void {
    this.MetodoService.theyClickedMe();
  }
 
  public changeDir():void {
    this.layOutService.changeDirection();
  
  }
  
  public changeAlign(): void {
    this.layOutService.currentAlign();
  }

  
  

  

}

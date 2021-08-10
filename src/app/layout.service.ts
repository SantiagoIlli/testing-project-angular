import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class layOutService {

  constructor() { }

public isColumn:boolean=true;
public align:string = "row";


public arraySrc = [{id:1,
  src:"https://www.freejpg.com.ar/asset/400/de/def1/F100027556.jpg", selected:false},{id:2,
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmFjdxDPxvUyNuOiVYBYFI9HsqVYkwusHVA&usqp=CAU" , selected:false},{id:3,
  src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b6/aa/b9/white-desert.jpg?w=900&h=-1&s=1" , selected:false},{id:4,
  src:"https://www.sgsgroup.com.ar/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg" , selected:false},{id:5,
  src:"https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C", selected:false},{id:6, 
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZCcmGJFEvwpBGbfQn2F3ZbE0I1ODTBBrf0x7YbWms7wgtd3ntzfiZ9EPEX7th1x8EBw&usqp=CAU" , selected:false},{id:7, 
  src:"https://besthqwallpapers.com/Uploads/7-2-2018/39763/thumb2-sunset-sea-landscape-waves-calm-sky.jpg", selected:false},{id:8,
  src:"https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg" , selected:false}
]




changeDirection() {
    this.isColumn=!this.isColumn;
    this.currentAlign();
    console.log(this.isColumn);
    console.log(this.align);
}

currentAlign() {
 if(!this.isColumn){
   this.align="column";
 } else {
   this.align="row";
 }console.log(this.align);

} 



}

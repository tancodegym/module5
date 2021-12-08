import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ImgSliderConfig} from "./token";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImg = new Array();
  config = 4;
  img:any;
  constructor(
    @Inject(ImgSliderConfig)
    @Optional()
    config:number

  ) {
    if(config){
      this.config=config;
    }

  }

  ngOnInit(): void {
    this.listImg = this.getListImg();
  }
  getListImg(){
    return [{id:1,src:'https://i.imgur.com/z7atkTm.jpg'},
      {id:2,src:'https://i.imgur.com/t3FETJB.jpg'},
      {id:3,src:'https://i.imgur.com/2545Wih.jpg'},
      {id:4,src:'https://i.imgur.com/rvycnaL.jpg'}
    ]
  }
  // this.productToUpdate = this.products.find(
  //   elementProduct => elementProduct.id === p.id);
  // this.productToUpdate.stock += p.updatedStockValue;
  change(img: any) {
      this.img= this.listImg.find(e => e.id===img.id)
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider.component';
import { ImgSlidComponent } from './img-slid/img-slid.component';



@NgModule({
  declarations: [ImgSliderComponent, ImgSlidComponent],
  exports: [
    ImgSliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImgSliderModule { }

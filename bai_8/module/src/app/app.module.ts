import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImageGalleryModule} from "./image-gallery/image-gallery.module";
import {GalleryConfig} from './image-gallery/token';
import {ImgSliderModule} from "./img-slider/img-slider.module";
import {ImgSliderConfig} from "./img-slider/token";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageGalleryModule,
    ImgSliderModule
  ],
  providers: [
    {provide: GalleryConfig, useValue: 1},
    {provide:ImgSliderConfig,useValue: 4}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

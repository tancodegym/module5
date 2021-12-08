import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://i.imgur.com/z7atkTm.jpg',
    'https://i.imgur.com/t3FETJB.jpg',
    'https://i.imgur.com/2545Wih.jpg',
    'https://i.imgur.com/rvycnaL.jpg'
  ];
  itemWidth: number;
  config = 4;
  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
  }

}

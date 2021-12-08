import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-img-slid',
  templateUrl: './img-slid.component.html',
  styleUrls: ['./img-slid.component.css']
})
export class ImgSlidComponent implements OnInit, DoCheck {

  @Input() imgId = 4;
  @Input()  src = 'https://i.imgur.com/rvycnaL.jpg';
  @Output() imgChange = new EventEmitter();


  constructor() {
  }



  ngOnInit(): void {
  }

  ngDoCheck(): void {

  }

  prev() {
    this.imgChange.emit({id:this.imgId})
  }
}

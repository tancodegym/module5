import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from "../service/dictionary.service";
@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  wod:any;
  constructor(
    private dictionaryService:DictionaryService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.wod = this.dictionaryService.findWordById(parseInt(id));
    });
  }
}

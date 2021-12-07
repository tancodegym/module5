import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {IWord} from "../iword";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words: IWord[] =[];
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.words = this.dictionaryService.getAll();
  }
}

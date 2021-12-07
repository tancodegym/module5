import {Injectable} from '@angular/core';
import {IWord} from "../iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[]= [{
    id: 1,
    word: 'book',
    mean: 'sách'
  },
    {id:2,
    word:'name',
    mean:'tên'}];

  constructor() {
  }
  getAll() {
    return this.words;
  }
}

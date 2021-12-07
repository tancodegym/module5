import {Injectable} from '@angular/core';
import {IWord} from "../iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {
    id: 1,
    word: 'book',
    mean: 'sách'
  },

    {
      id: 2,
      word: 'name',
      mean: 'tên'
    }
    , {
      id: 3,
      word: 'dictionary',
      mean: 'từ điển'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.words;
  }

  findWordById(id: number) {
    return this.words.find(item => item.id === id);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../model/country";
const API =" http://localhost:3000/countryList";
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }
  getAll():Observable<Country[]>{
    return this.http.get<Country[]>(API);
  }
}

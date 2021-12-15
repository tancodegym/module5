import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HouseCar} from "../model/house-car";
const API_URL ="http://localhost:3000/houseCarList";
@Injectable({
  providedIn: 'root'
})
export class HouseCarService {

  constructor(private http: HttpClient) { }
  getAll():Observable<HouseCar[]>{
    return this.http.get<HouseCar[]>(API_URL);
  }
}

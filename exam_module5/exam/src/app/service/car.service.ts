import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";
const API = "http://localhost:3000/carList";
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  getAll():Observable<Car[]>{
    return this.http.get<Car[]>(API+"?"+"_sort=gioDi&_order=asc");
  }
  update(car:Car):Observable<void>{
    return this.http.patch<void>(API+"/"+car.id,car);
  }
  delete(id:number):Observable<void>{
    return this.http.delete<void>(API+"/"+id);
  }
}

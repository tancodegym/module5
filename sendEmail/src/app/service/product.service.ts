import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
let API = "http://localhost:8080/api/product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(API+"/list");
  }
  findByid(id:number):Observable<Product> {
    return this.http.get<Product>(API+"/"+id);
  }

  addProductToCart(id: number):Observable<void> {
    return this.http.get<void>(API+"/add/"+id);
  }
}

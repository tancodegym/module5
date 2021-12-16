import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {Producer} from "../model/producer";
import {PageProduct} from "../model/pageProduct";

let API = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API + "/product/list");
  }

  getProducerList(): Observable<Producer[]> {
    return this.http.get<Producer[]>(API + "/product/producerList");
  }

  createProduct(product: Product): Observable<void> {
    return this.http.post<void>(API + "/product/create", product);
  }

  updateProduct(product: Product): Observable<void> {
    return this.http.patch<void>(API + "/product/update/", product);
  }

  findById(id: number): Observable<Product> {
    return this.http.post<Product>(API + "/product/findById", id);
  }

  delete(id: number): Observable<void> {
    return this.http.post<void>(API + "/product/delete", id);
  }

  getPage(page:number):Observable<any>{
    return this.http.get<any>(API+"/product/getPage/"+page);
  }
}

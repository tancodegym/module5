import {Injectable} from '@angular/core';
import {Category} from "../../../../../bai_7/service/src/app/model/category";
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customerList');
  }
  createCustomer(customer):Observable<void>{
    return this.http.post<void>(API_URL+ '/customerList',customer);
  }

    updateCustomer(customer:Customer):Observable<void>{
    return this.http.patch<void>(API_URL+'/customerList'+'/'+customer.id,customer);
  }

  findById(id: number) {
    return this.http.get<Customer>(API_URL+'/customerList/'+id);
  }

  deleteCustomer(id: number) {
    return this.http.delete<void>(API_URL+'/customerList'+'/'+id);
  }

  search(customerSearch: Customer): Observable<Customer[]> {
    console.log(customerSearch.type.type);
    return this.http.get<Customer[]>(
      API_URL+'/customerList'+'?'
      +'name_like='+customerSearch.name
      + '&code_like='+customerSearch.code
      +'&type.id='+customerSearch.type.id
      +'&birthday_like='+customerSearch.birthday
      +'&phone_like='+customerSearch.phone
      +'&phone_like='+customerSearch.phone

    );
  }
}

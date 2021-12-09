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
  customerList: Customer[] = [
    {
      id:1,
  code:'KH-0001',
  type: {id:1,type:'Diamond'},
  name:'Lê An',
  birthday:'2000-02-02',
  idCard:'201605626',
  phone:'0947829245',
  email:'tan@gmail.com',
  address:'Da Nang',
    },
    {
      id:2,
      code:'KH-0002',
      type: {id:3,type:'Gold'},
      name:'Trần Thị Bê',
      birthday:'2000-02-02',
      idCard:'201605626',
      phone:'0947829245',
      email:'tan@gmail.com',
      address:'Da Nang',
    },
    {
      id:4,
      code:'KH-0003',
      type: {id:3,type:'Member'},
      name:'Trần Văn Cê',
      birthday:'2000-02-02',
      idCard:'201605626',
      phone:'0947829245',
      email:'tan@gmail.com',
      address:'Da Nang',
    },
    ]

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customerList');
  }
  createCustomer(customer):Observable<void>{
    return this.http.post<void>(API_URL+ '/customerList',customer);
  }

  saveCustomer(customer) {
    this.customerList.push(customer);
  }

  findById(id: number) {
    return this.customerList.find(customer => customer.id === id);
  }

  deleteCustomer(id: number) {
    return this.http.delete<void>(API_URL+'/customerList'+'/'+id);
    // this.customerList.splice(this.customerList.findIndex(customer=>customer.id===id),1);
  }
}

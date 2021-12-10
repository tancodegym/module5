import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {Service} from "../model/service";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(API_URL + '/serviceList');
  }
  createService(service):Observable<void>{
    return this.http.post<void>(API_URL+ '/serviceList',service);
  }

  updateService(service:Service):Observable<void>{
    return this.http.patch<void>(API_URL+'/serviceList'+'/'+service.id,service);
  }

  findById(id: number) {
    return this.http.get<Service>(API_URL+'/serviceList/'+id);
  }

  deleteService(id: number) {
    return this.http.delete<void>(API_URL+'/serviceList'+'/'+id);
  }
}

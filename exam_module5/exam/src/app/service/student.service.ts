import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
let API = " http://localhost:3000/studentList";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http :HttpClient) { }
  getAll():Observable<Student[]>{
    return this.http.get<Student[]>(API);
  }
}

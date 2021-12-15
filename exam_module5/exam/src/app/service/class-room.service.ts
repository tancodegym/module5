import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassRoom} from "../model/class-room";
let API = "http://localhost:3000/classRoomList";
@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {

  constructor(
    private http: HttpClient
  ) { }
  getAll():Observable<ClassRoom[]>{
    return this.http.get<ClassRoom[]>(API);
  }
}

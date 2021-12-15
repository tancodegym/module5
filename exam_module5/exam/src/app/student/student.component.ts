import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student";
import {StudentService} from "../service/student.service";
import {ClassRoomService} from "../service/class-room.service";
import {ClassRoom} from "../model/class-room";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css',
  ],
})
export class StudentComponent implements OnInit {
  studentList : Student[] =[];
  classRoomList : ClassRoom[] = [];
  page =1;
  constructor( private studentService: StudentService,
               private classRoomService: ClassRoomService) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe( value=>{
      this.studentList = value;
    });
    this.classRoomService.getAll().subscribe( value=>{
      this.classRoomList = value;
    });

  }

}

import { Component, OnInit } from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";
import {DivisionService} from "../service/division.service";
import {PositionService} from "../service/position.service";
import {EducationService} from "../service/education.service";
import {Position} from "../model/position";
import {Education} from "../model/education";
import {Division} from "../model/division";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[] = [];
  positionList: Position[] =[];
  educationList: Education[] =[];
  divisionList: Division[]=[];
  idEmp:number;
  constructor(
    private employeeService: EmployeeService,
    private divisionService: DivisionService,
    private positionService: PositionService,
    private educationService: EducationService
  ) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(empList => {
      this.employeeList = empList;
    });

    this.divisionService.getAll().subscribe(divList=>{
      this.divisionList= divList ;
    });
    this.positionService.getAll().subscribe(posList=>{
      this.positionList= posList ;
    });
    this.educationService.getAll().subscribe(eduList=>{
      this.educationList= eduList ;
    });
  }
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl(''),
    position: new FormControl(''),
    education: new FormControl(''),
    division: new FormControl(''),
    birthday: new FormControl(''),
    salary: new FormControl(''),
    phone: new FormControl(''),
    idCard: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  empEditForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl(''),
    position: new FormControl(''),
    education: new FormControl(''),
    division: new FormControl(''),
    birthday: new FormControl(''),
    salary: new FormControl(''),
    phone: new FormControl(''),
    idCard: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  createEmployee() {
    let employee = this.employeeForm.value;
    this.employeeService.createEmployee(employee).subscribe();
  }

  trackId(id: any) {
    this.idEmp = Number(id);
    this.bindingEdit();
  }
  deleteEmployee() {
    this.employeeService.deleteEmployee(this.idEmp).subscribe();
    this.idEmp = 0;
  }

  bindingEdit() {
    let employee = this.employeeList.find(emp =>emp.id=this.idEmp);
    this.empEditForm.setValue(employee);
  }


  updateEmployee() {
    let empEdit = this.empEditForm.value;
    empEdit.id = this.idEmp;
    this.employeeService.updateEmployee(empEdit).subscribe();
  }

  search() {
  }


}

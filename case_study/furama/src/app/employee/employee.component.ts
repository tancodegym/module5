import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";
import {DivisionService} from "../service/division.service";
import {PositionService} from "../service/position.service";
import {EducationService} from "../service/education.service";
import {Position} from "../model/position";
import {Education} from "../model/education";
import {Division} from "../model/division";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[] = [];
  positionList: Position[] = [];
  educationList: Education[] = [];
  divisionList: Division[] = [];
  idEmp: number;
  employee:Employee;
  constructor(
    private employeeService: EmployeeService,
    private divisionService: DivisionService,
    private positionService: PositionService,
    private educationService: EducationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(empList => {
      this.employeeList = empList;
    });

    this.divisionService.getAll().subscribe(divList => {
      this.divisionList = divList;
    });
    this.positionService.getAll().subscribe(posList => {
      this.positionList = posList;
    });
    this.educationService.getAll().subscribe(eduList => {
      this.educationList = eduList;
    });
  }

  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    salary: new FormControl(''),
    phone: new FormControl(''),
    idCard: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    position: new FormControl(''),
    division: new FormControl(''),
    education: new FormControl('')
  });
  empEditForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    salary: new FormControl(''),
    phone: new FormControl(''),
    idCard: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    position: new FormControl(''),
    division: new FormControl(''),
    education: new FormControl('')
  });
  p: number=1;
  comparePosition(c1: Position, c2: Position): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareDivision(c1: Division, c2: Division): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareEducation(c1: Education, c2: Education): boolean {
    console.log(c1.name);
    console.log(c2.name);
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  createEmployee() {
    let employee = this.employeeForm.value;
    this.employeeService.createEmployee(employee).subscribe(
      next => {
        this.router.navigateByUrl('customer').then(r => {
            if (r) {
              this.router.navigateByUrl("/employee")
            }
          }
        );
      }
    );
    this.employeeForm.reset();
  }

  trackId(id: any) {
    this.idEmp = Number(id);
    this.bindingEdit();
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.idEmp).subscribe(
      next => {
        this.router.navigateByUrl('customer').then(r => {
            if (r) {
              this.router.navigateByUrl("/employee")
            }
          }
        );
      }
    );
    this.idEmp = 0;
  }

  bindingEdit() {
    for(let i=0;i<this.employeeList.length;i++){
      if(this.employeeList[i].id===this.idEmp){
        this.employee= this.employeeList[i];
      }
    }
    this.empEditForm.setValue(this.employee);
  }


  updateEmployee() {
    let empEdit = this.empEditForm.value;
    empEdit.id = this.idEmp;
    this.employeeService.updateEmployee(empEdit).subscribe(
      next => {
        this.router.navigateByUrl('customer').then(r => {
            if (r) {
              this.router.navigateByUrl("/employee")
            }
          }
        );
      });
    this.idEmp = 0;
    this.empEditForm.reset();
  }

  search() {
  }


}

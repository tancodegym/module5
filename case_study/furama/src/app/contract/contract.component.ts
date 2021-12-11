import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {Contract} from "../model/contract";
import {Employee} from "../model/employee";
import {Service} from "../model/service";
import {CustomerServiceService} from "../service/customer-service.service";
import {EmployeeService} from "../service/employee.service";
import {ServiceService} from "../service/service.service";
import {ContractService} from "../service/contract.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];
  customerList: Customer[];
  employeeList: Employee[];
  serviceList: Service[];
  p: number = 1;

  constructor(
    private customerService: CustomerServiceService,
    private employeeService: EmployeeService,
    private service: ServiceService,
    private contractService: ContractService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    });
    this.employeeService.getAll().subscribe(employees => {
      this.employeeList = employees;
    });
    this.service.getAll().subscribe(services => {
      this.serviceList = services;
    });
    this.contractService.getAll().subscribe(contracts => {
      this.contractList = contracts;
    });

  }

  contractForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    customer: new FormControl(''),
    employee: new FormControl(''),
    service: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    deposit: new FormControl(''),
    total: new FormControl(''),
  });

  createContract() {
    let contract = this.contractForm.value;
    this.contractService.createContract(contract).subscribe(next => {
        this.router.navigateByUrl("/employee").then(e => {
          if (e) {
            this.router.navigateByUrl("/contract")
          }
          // else {
          //   alert("Navigation has failed!");
          // }
        })
      }
    );
  }

}

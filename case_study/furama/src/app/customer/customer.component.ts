import {Component, DoCheck, OnInit} from '@angular/core';
import {CustomerServiceService} from "../service/customer-service.service";
import {Customer} from "../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";
import {CustomerTypeService} from "../service/customer-type.service";
import {RouterEntryPoint} from "@angular/compiler-cli/src/ngtsc/routing/src/route";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit,DoCheck {
  customerList: Customer[] = [];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('',[Validators.required,Validators.pattern('KH-\\d{4}')]),
    type: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    idCard: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.pattern("[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9]*)")]),
    address: new FormControl('')
  });
  cusEditForm: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      code: new FormControl(),
      type: new FormControl(),
      name: new FormControl(),
      birthday: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl('',[Validators.required,Validators.pattern("[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9]*)")]),
      address: new FormControl()
    }
  );
  idCus: number;
  typeList: CustomerType[];
  cusSearchForm: FormGroup = new FormGroup(
    {
      code: new FormControl(),
      type: new FormControl(),
      name: new FormControl(),
      birthday: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    }
  );
  constructor(
    private customerService: CustomerServiceService,
    private typeService: CustomerTypeService
  ) {
  }

  ngOnInit(): void {
    // this.getAll();
    this.typeService.getAll().subscribe(typies => {
      this.typeList = typies;
    });
    this.customerService.getAll().subscribe(customers=>{
        this.customerList= customers ;
    });
  }

  createCustomer() {
    let customer = this.customerForm.value;
    this.customerService.createCustomer(customer).subscribe();
  }
  ngDoCheck(): void {
    this.customerService.getAll().subscribe(customers=>{
      this.customerList= customers ;
    });
  }

  trackId(id: any) {
    this.idCus = Number(id);
    this.bindingEdit();
  }
  deleteCustomer() {
    this.customerService.deleteCustomer(this.idCus).subscribe();
    this.idCus = 0;
  }

  bindingEdit() {
    let customer = this.customerService.findById(this.idCus);
    this.cusEditForm.setValue(customer);
  }

  getId(){
    let idList = new Array();
    for(let i=0;i<this.customerList.length;i++){
      idList.push(this.customerList[i].id);
    }
    idList.sort();
    let id:number;
    for(let i = 0; i<idList.length;i++){
      if(i==idList.length-1){
        id=idList.length;
        break;
      }
      if((idList[i+1]-idList[i])>=2){
        id=i+1;
        break;
      }
    }
    return id;
  }
  get email() {
    return this.customerForm.get('email');
  }
  get emailEdit() {
    return this.cusEditForm.get('email');
  }
  updateCustomer() {
    let cusEdit = this.cusEditForm.value;
    this.customerService. deleteCustomer(this.idCus);
    cusEdit.id = this.idCus;
    this.idCus=0;
    this.customerService.saveCustomer(cusEdit);
  }


  search() {
    console.log(this.cusSearchForm.value);
  }
}

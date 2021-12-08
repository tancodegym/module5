import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from "../service/customer-service.service";
import {Customer} from "../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";
import {CustomerTypeService} from "../service/customer-type.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('',[Validators.required,Validators.pattern('KH-//d{4}')]),
    type: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    idCard: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
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
      email: new FormControl(),
      address: new FormControl()
    }
  );
  idCus: number;
  typeList: CustomerType[];

  constructor(
    private customerService: CustomerServiceService,
    private typeService: CustomerTypeService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
    this.typeList = this.typeService.getAll();
  }


  getAll() {
    this.customerList = this.customerService.getAll();
  }

  createCustomer() {
    let customer = this.customerForm.value;
    customer.id=this.customerList.length;
    this.customerService.saveCustomer(customer);
  }

  trackId(id: any) {
    this.idCus = Number(id);
    alert(this.idCus);
    this.bindingEdit();
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idCus);
    this.idCus = 0;
  }

  bindingEdit() {
    let customer = this.customerService.findById(this.idCus);
    this.cusEditForm.value.id = customer.id;
    this.cusEditForm.value.code = customer.code;
    this.cusEditForm.value.type = customer.type;
    this.cusEditForm.value.name = customer.name;
    this.cusEditForm.value.birthday = customer.birthday;
    this.cusEditForm.value.idCard = customer.idCard;
    this.cusEditForm.value.phone = customer.phone;
    this.cusEditForm.value.email = customer.email;
    this.cusEditForm.value.address = customer.address;
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
}

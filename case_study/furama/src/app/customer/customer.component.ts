import { Component, DoCheck, OnInit} from '@angular/core';
import {CustomerServiceService} from "../service/customer-service.service";
import {Customer} from "../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";
import {CustomerTypeService} from "../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];
  idCus: number;
  typeList: CustomerType[];
  p:number =1;
  // customerForm: FormGroup = new FormGroup({
  //   id: new FormControl(''),
  //   code: new FormControl('',[Validators.required,Validators.pattern('KH-\\d{4}')]),
  //   type: new FormControl('',[Validators.required]),
  //   name: new FormControl('',[Validators.required,Validators.pattern('([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$')]),
  //   birthday: new FormControl('',[Validators.required,Validators.pattern("[\\d]{4}(-)\\+((0\\+[1-9]{1})\\|(1\\+[0-2]{1}))\\+(-)\\+(([1-2]{1}\\+[\\d]{1})\\|(0\\+[1-9]{1})\\|(3\\+[0-1]))")]),
  //   idCard: new FormControl('',[Validators.required,Validators.pattern("\d{9}")]),
  //   phone: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  //   email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //   address: new FormControl('',[Validators.required,Validators.pattern("([\p{Lu}][\p{Ll}]{1,8})(\s([\p{Lu}]\|[\p{Lu}][\p{Ll}]{1,10})){0,5}\$")])
  // });
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
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
      email: new FormControl('',[Validators.required,Validators.pattern("[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9]*)")]),
      address: new FormControl()
    }
  );

  cusSearchForm: FormGroup = new FormGroup(
    {
      code: new FormControl(''),
      type: new FormControl(),
      name: new FormControl(''),
      birthday: new FormControl(''),
      idCard: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    }
  );
  customerSearch:Customer;
  constructor(
    private customerService: CustomerServiceService,
    private typeService: CustomerTypeService,
    private router: Router
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
    this.customerService.createCustomer(customer).subscribe(next =>{
      this.router.navigateByUrl("/employee").then(e => {
        if (e) {
          this.router.navigateByUrl("/customer")
        }
        // else {
        //   alert("Navigation has failed!");
        // }
      } )}

    );

  }

  trackId(id: any) {
    this.idCus = Number(id);
    this.bindingEdit();
  }
  deleteCustomer() {
    this.customerService.deleteCustomer(this.idCus).subscribe(
      next =>{
      this.router.navigateByUrl("/employee").then(e => {
        if (e) {
          this.router.navigateByUrl("/customer")
        }
        // else {
        //   alert("Navigation has failed!");
        // }
      } );
    });
    this.idCus = 0;

  }
  customer:Customer;
  bindingEdit() {
   for(let i=0;i<this.customerList.length;i++){
     if(this.idCus===this.customerList[i].id){
       this.customer=this.customerList[i];
     }
   }
    this.cusEditForm.setValue(this.customer);

  }


  updateCustomer() {
    let cusEdit = this.cusEditForm.value;
    cusEdit.id = this.idCus;
    this.customerService.updateCustomer(cusEdit).subscribe(
      next =>{
        this.router.navigateByUrl("/employee").then(e => {
          if (e) {
            this.router.navigateByUrl("/customer")
          }
          // else {
          //   alert("Navigation has failed!");
          // }
        } );
      });
  }

  search() {
    this.customerSearch = this.cusSearchForm.value;
    this.customerService.search(this.customerSearch).subscribe( customers=>{
      this.customerList= customers ;
      }
    );
    this.cusSearchForm.reset();
  }

  compareCustomerType(c1: CustomerType, c2:CustomerType ): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }


get id(){
    return this.customerForm.get('id');
}
  get idEdit(){
    return this.cusEditForm.get('id');
  }
  get code(){
    return this.customerForm.get('code');
  }
  get codeEdit(){
    return this.cusEditForm.get('code');
  }
  get type(){
    return this.customerForm.get('type');
  }
  get typeEdit(){
    return this.cusEditForm.get('type');
  }
  get name() {
    return this.customerForm.get('name');
  }
  get nameEdit() {
    return this.cusEditForm.get('name');
  }
  get birthday(){
    return this.customerForm.get('birthday');
  }
  get birthdayEdit(){
    return this.cusEditForm.get('birthday');
  }
  get idCard(){
    return this.customerForm.get('idCard');
  }
  get idCardEdit(){
    return this.cusEditForm.get('idCard');
  }
  get phone() {
    return this.customerForm.get('phone');
  }
  get phoneEdit() {
    return this.cusEditForm.get('phone');
  }
  get email() {
    return this.customerForm.get('email');
  }
  get emailEdit() {
    return this.cusEditForm.get('email');
  }
  get address() {
    return this.customerForm.get('address');
  }
  get addressEdit() {
    return this.cusEditForm.get('address');
  }
}

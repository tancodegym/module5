import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {AttachService} from "../model/attach-service";
import {ContractService} from "../service/contract.service";
import {Router} from "@angular/router";
import {AttachServiceService} from "../service/attach-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ContractDetailService} from "../service/contract-detail.service";
import {ContractDetail} from "../model/contract-detail";

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contractList: Contract[]= [];
  attachServiceList : AttachService[] =[];
  contractDetailList:ContractDetail[]=[];
  p:number=1;


  constructor(
    private contractService: ContractService,
    private attachService:AttachServiceService,
    private contractDetailService: ContractDetailService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(contracts => {
      this.contractList = contracts;
    });
    this.contractDetailService.getAll().subscribe(contractDetails => {
      this.contractDetailList = contractDetails;
    });
    this.attachService.getAll().subscribe( attachServices =>{
      this.attachServiceList = attachServices;
      }
    );
  }
  contractDetailForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    contract: new FormControl(''),
    attachService: new FormControl(''),
    quantity: new FormControl(''),
  });
  createContractDetail() {
    let contractDetail = this.contractDetailForm.value;
    this.contractDetailService.createContractDetail(contractDetail).subscribe(next => {
        this.router.navigateByUrl("/employee").then(e => {
          if (e) {
            this.router.navigateByUrl("/contractDetail")
          }
        })
      }
    );
  }


}
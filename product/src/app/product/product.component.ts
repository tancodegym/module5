import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Producer} from "../model/producer";
import {Country} from "../../../../exam_module5/exam/src/app/model/country";
import {PageProduct} from "../model/pageProduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  producerList: Producer[];
  page=0;
  totalPage :number;
  pageProduct: PageProduct;
  productForm: FormGroup = new FormGroup(
    {
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      producer: new FormControl(''),
    }
  );
  productEditForm: FormGroup = new FormGroup(
    {
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      producer: new FormControl(''),
    }
  );
  detailForm: FormGroup = new FormGroup(
    {
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      producer: new FormControl(''),
    }
  );


  constructor(
    private productService: ProductServiceService
  ) {
  }

  ngOnInit(): void {
    this.productService.getPage(this.page).subscribe(value => {
      console.log(value);
      this.productList =value.content;
    });
    this.productService.getProducerList().subscribe(value => {
      this.producerList = value;
    })
  }

  productCreate: Product;

  createProduct() {
    this.productCreate = this.productForm.value;
    console.log(this.productCreate);

    this.productService.createProduct(this.productCreate).subscribe(value => {
      alert("Thêm thành công !");
      this.ngOnInit();
    });
  }

  getIdEdit(p : Product) {
    this.bindingEdit(p);
  }

  compareProducer(c1: Producer, c2: Producer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  bindingEdit(p:Product) {
    this.productEditForm.setValue(p);
  }
  productUpdate: Product;
  updateProduct() {
    this.productUpdate = this.productEditForm.value;
    this.productService.updateProduct(this.productUpdate).subscribe(value=>{
      alert("Edit thành công !");
      this.ngOnInit();
    });
  }

  detail(id: number) {
    this.bindingDetail(id);
  }
  productDetail:Product;
  bindingDetail(id){
    this.productService.findById(id).subscribe(value=>{
      this.productDetail = value;
      this.detailForm.setValue(this.productDetail);
    })
  }
  idDel:number;
  getIdDel(id: number) {
    this.idDel = id;
  }

  delete() {
    this.productService.delete(this.idDel).subscribe(value=>{
      alert("xóa thành công");
      this.ngOnInit();
    });
  }


}

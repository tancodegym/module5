import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup ;
  product :Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private domSanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
     this.product  = this.productService.findById(parseInt(id));
     console.log(this.product);
     console.log(id);
     this.productForm =new FormGroup({
       id: new FormControl(this.product.id),
       name: new FormControl(this.product.name),
       price: new FormControl(this.product.price),
       description: new FormControl(this.product.description),
     })
    });
  }
  submit() {
    this.product= this.productForm.value;
    this.productService.updateById(this.product);
  }
}

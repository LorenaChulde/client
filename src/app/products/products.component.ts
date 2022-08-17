import { Component, OnInit } from '@angular/core';
//import id from 'date-fns/locale/id';
import { ProductsModel, CreateProductDto, UpdateProductDto } from '../models/products.model';
import { ProductService } from '../services/product.service';
//import { format } from 'date-fns';
//import { jsPDF } from "jspdf";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:ProductsModel[]=[];
  
  constructor(private productService:ProductService) {
    
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAll().subscribe(
      response => {
        this.products = response;
        console.log(response);
      }
    )
  }

  getProduct(){
    this.productService.getOne(2).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  createProduct(){
    const data = {
      title:'pantalon',
      description: 'jean',
      price:25,
      categoryId:4,
      images:[
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8770'
      ]
    }

    this.productService.store(data).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  updateProduct(){
    const data = {
      title:'short',
      description: 'corto',
      price:5,
      categoryId:2,
      images:[
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8770'
      ]
    }

    this.productService.update(89, data).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  deleteProduct(id: ProductsModel['id']){
    this.productService.destroy(id).subscribe(
      response => {
        //this.products = response;
        this.products = this.products.filter(product => product.id != id );
        console.log(response);
      }
    );
  }

}

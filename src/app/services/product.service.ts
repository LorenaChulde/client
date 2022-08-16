import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProductDto, ProductsModel, UpdateProductDto } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ProductsModel[]>{
    return this.httpClient.get<ProductsModel[]>(this.API_URL);
  }

  getOne(id: ProductsModel['id']):Observable<ProductsModel> {
    const url = '${this.API_URL}/${id}';
    return this.httpClient.get<ProductsModel>(url);
  }
  store(product: CreateProductDto):Observable<ProductsModel> {
    const data = {
      title: 'pantalon',
      description: 'jean',
      price: 25,
      categgoryId: 4,
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8770'
      ]
    }

    const url = '${this.API_URL}';
    return this.httpClient.post<ProductsModel>(url, product);
  }
  update(id: ProductsModel['id'], product: UpdateProductDto):Observable<ProductsModel> {
    const data = {
      title: 'short',
      description: 'corto',
      price: 5,
      categgoryId: 2,
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8770'
      ]
    }

    const url = '${this.API_URL}/${id}';
    return this.httpClient.put<ProductsModel>(url, product);
  }
  destroy(id: ProductsModel['id']):Observable<ProductsModel> {
    const url = '${this.API_URL}/${id}';
    return this.httpClient.delete<ProductsModel>(url);
  }
}

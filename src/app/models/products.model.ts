import { CategoryModel } from "./category.model";

export interface ProductsModel{
    id:number;
    title:string;
    price:number;
    description:string;
    category:CategoryModel;
    images: string[];
}

export interface CreateProductDto extends Omit<ProductsModel, 'id' | 'category'> {
    categoryId:number;
}
export interface UpdateProductDto extends Partial<ProductsModel> {
    categoryId?:number;
}
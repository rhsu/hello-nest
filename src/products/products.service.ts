import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        // const prodId = new Date().toString();
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.products.find((prod) => prod.id == productId)
        if (!product) {
            throw new NotFoundException('could not find product');
        }
        return {...product };
    }
}
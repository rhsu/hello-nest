import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    addProducts(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number,
        // @Body() completeBody: { title: string, description: string, price: number }
    ) {
        const prodId = new Date().toString();
        const generatedId = this.productsService.insertProduct(title, description, price);
        return { id: generatedId }
    }

    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }
}


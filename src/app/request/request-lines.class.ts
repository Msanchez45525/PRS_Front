import { Product } from "../product/product.class";

export class RequestLines {
    id: number = 0;
    quantity: number = 0;
    requestId: number = 0;
    request!: Request;
    productId: number = 0;
    product!: Product;
}
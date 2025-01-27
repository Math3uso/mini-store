import { Product } from "./product";
import { User } from "./user";

export type Cart = {
    qtd: number;
    product: Product;
}

export type CartItem = {
    id: string;
    user?: User;
    userId?: string;
    productId?: string
    product: Product;
    qtd:number;
    total:number;
}
import { Product } from "@/@types/product";
import { req } from "./api"
import { FilterSelect } from "@/@types/filter";
import { Cart, CartItem } from "@/@types/cart";
import { UpdateQuantity } from "@/@types/updateQuantity";
import { useQueryClient } from "@tanstack/react-query";

export const getProducts = async (): Promise<{ products: Product[] }> => {
    const products = await req.get("/products");
    return products.data;
}


export const addProductInCart = async (cart: Cart) => {
    const res = await req.post('/cart', { cart });
    return res.data;
}

export const getProductsToCart = async (userId: string) => {
    const res = await req.get(`/cart/${userId}`);
    return res.data.cartProducts;
}

export const handleCheckout = async (cart:CartItem[])=>{
    const res = await req.post('/checkout',{ cart });
    window.location.href = res.data.url;
}

export const removeProduct = async (cartId:string)=>{
    const res = await req.delete('/cart', {
        headers:{
            Authorization:"***"
        },
        data:{ cartId }
    });
    return res.data;
}

export const setQuantityCartItem = async (config: UpdateQuantity)=>{
    const res = await req.post('/cartItem',{ ...config });
    return res.data;
}

export const getProductsByFilters = async (filters:string)=>{
    const res = await req.get(`/products?${filters}`);
    return res.data;
}
import { Cart } from "@/@types/cart";
import { FilterElement } from "@/@types/filter";
import { Product } from "@/@types/product";
import prisma from "@/lib/prisma";

export default {
    addProducts: async (products: Product[]) => {
        return await prisma.product.createMany({
            data: products
        });
    },
    getAllProducts: async () => {
        return await prisma.product.findMany({
            take: 9
        });
    },
    getProductsByName: async (name: string) => {
        return await prisma.product.findMany({
            where: {
                OR: [
                    {
                        name: name
                    },
                    {
                        name: {
                            startsWith: name
                        }
                    }
                ]
            },
        });
    },
    getProductByFilter: async (filter: { [key: string]: string }) => {
        console.log(filter);
        return await prisma.product.findMany({
            where: filter,
        });
    },
    getProductByid: async (id: string) => {
        return await prisma.product.findFirst({
            where: { id }
        });
    },
    addProductInCart: async (cart:Cart, userId: string) => {

        let total = 0;
        for(let i = 0; i<cart.qtd; i++){
            total += cart.product.priceValue;
        }
        return await prisma.cartItem.create({
            data: {
                userId,
                qtd:cart.qtd,
                productId:cart.product.id,
                total,
            },
        });
    }
}

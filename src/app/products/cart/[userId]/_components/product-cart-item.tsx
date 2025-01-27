"use client";

import { CartItem } from "@/@types/cart";
import { ButtonCount } from "@/components/button-count/button-count";
import { ButtonCountLabel } from "@/components/button-count/button-count-label";
import { useCart } from "@/context/cart-context";
import { removeProduct } from "@/utils/query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
    product: CartItem;
    i: number;
    handleTotalValue: () => void;
}

export const ProductCartItem = ({ product, i, handleTotalValue }: Props) => {

    const { cartItem, setCartItem } = useCart();

    const queryClient = useQueryClient();
    const [dataItens, setDataItems] = useState<CartItem[]>([])

    const [cart, setCart] = useState(product);

    const mutation = useMutation({
        mutationFn: async (id: string) => {
            return await removeProduct(id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cartItems"]
            })
        }
    });

    const handleIncrementProduct = () => {
        const newData = queryClient.getQueriesData({ queryKey: ["cartItems"] });
        const newCart = cartItem;
        newCart[i].qtd++;
        setCartItem(newCart);
        setCart(newCart[i]);
        handleTotalValue();
    }
    const handleDecrement = async () => {
        const cartData = cartItem[i];
        if (cart.qtd >= 1) {
            const newCart = cartItem;
            newCart[i].qtd--;
            setCartItem(newCart);
            setCart(newCart[i]);
            handleTotalValue();
        }
    }

    const handleRemoveItem = async () => {
        mutation.mutate(product.id);
    }

    return (
        <div className="border-b flex items-center gap-5 p-3">
            <Image className="lg:hidden" src={product.product.imageUrl} alt="" width={99} height={99} />
            <Image className="max-lg:hidden" src={product.product.imageUrl} alt="" width={124} height={124} />
            <div className="flex justify-between w-full h-full  ">
                <div>
                    <h2 className="font-bold text-xl max-sm:text-lg">{product.product.name}</h2>
                    <div className="my-2">
                        <p className="text-sm max-sm:text-xs">
                            Size:<span className="ml-1 text-black/60">{product.product.sizes}</span>
                        </p>
                    </div>
                    <strong className="font-bold text-2xl max-sm:text-xl">{product.product.price}</strong>
                </div>
                <div className="h-full flex flex-col justify-between items-end">
                    <button onClick={handleRemoveItem}>
                        <Trash2 color="red" />
                    </button>
                    <ButtonCount className="max-sm:w-full max-sm:text-sm max-sm:py-2" increment={handleIncrementProduct} decrement={handleDecrement}>
                        <ButtonCountLabel>{cart.qtd}</ButtonCountLabel>
                    </ButtonCount>
                </div>
            </div>
        </div>
    );
}
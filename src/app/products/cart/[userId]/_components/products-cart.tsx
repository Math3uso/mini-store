"use client";

import { CartItem } from "@/@types/cart";
import { ProductCartItem } from "./product-cart-item";
import { useCart } from "@/context/cart-context";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Tag } from 'lucide-react';
import { ButtonField } from "@/components/button-element";
import { getProductsToCart, handleCheckout } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import { BuildSkeleton } from "@/app/products/_components/skeleton";

type Props = {
    products?: CartItem[];
    id?: string
}

export const ProductsCart = ({ products, id }: Props) => {

    const { cartItem, setCartItem } = useCart();
    const [total, setTotal] = useState<number | null>(null);

    const { isPending, error, data } = useQuery<CartItem[]>({
        queryKey: ["cartItems"],
        queryFn: () => getProductsToCart(id as string),
        refetchOnWindowFocus: false
    });

    useEffect(() => {
        if (data) {
            setCartItem(data);
            handleTotalValue();
        }
    }, [data]);

    const handleTotalValue = () => {
        if (data) {
            let value = 0;
            for (let i of cartItem) {
                for (let t = 0; t < i.qtd; t++) {
                    value += i.product.priceValue;
                }

            }
            setTotal(value);
        }
        return total;
    }

    const handlePrepareCheckout = () => {
        const verifCart = cartItem.filter(cart => cart.qtd > 0);
        if (verifCart.length === 0) {
            return alert("È necessario ter pelo menos um produto adicionado para finalizar a compra");
        }
        handleCheckout(verifCart);
    }

    if (!data && !isPending) {
        return <p>Nenhum produto adicionado</p>
    }

    if (!data && isPending) {
        return (
            <div className="mt-2 flex justify-center items-center flex-wrap gap-5">
                {isPending && Array.from({ length: 15 }).map((_, i) => (
                    <BuildSkeleton key={i} />
                ))}
            </div>
        )
    }

    return (
        <div className=" py-3 flex w-full gap-5 ">
            <div className="mt-5 py-3 flex w-full gap-5 max-sm:flex-col">

                <div className="flex flex-col gap-5 border rounded-3xl p-3 flex-1 w-full">
                    {data && data.map((product, i) => (
                        <ProductCartItem key={product.id} product={product} i={i} handleTotalValue={handleTotalValue} />
                    ))}
                </div>

                <div className="w-[530px] h-[480px] p-5 rounded-3xl border max-sm:w-full max-sm:h-full">
                    <div className="my-3 pb-4 border-b">
                        <h2 className="text-2xl font-bold">Order Summary</h2>
                    </div>

                    <div className="mt-5">

                        <div className="flex justify-between">
                            <p className="font-medium text-xl">Total</p>
                            <span className="font-bold text-2xl">R${total}</span>
                        </div>

                        <div className="flex items-center gap-5 mt-5 max-sm:gap-3">
                            <div className="flex justify-start gap-3 text-base font-normal rounded-3xl bg-[#F0F0F0] px-4 py-3 flex-1">
                                <Tag color="rgb(0 0 0 / 0.4)" size={24} />
                                <input type="text" placeholder="Add promo code" className="outline-none bg-transparent" />
                            </div>
                            <ButtonField className="w-[119px] max-sm:text-sm">
                                Apply
                            </ButtonField>
                        </div>

                        <ButtonField onClick={handlePrepareCheckout} className="mt-5 w-full flex justify-center items-center py-4">
                            <p className="text-base mr-5">Go to Checkout</p> <ArrowRight />
                        </ButtonField>
                    </div>
                </div>
            </div>
        </div>
    );
}
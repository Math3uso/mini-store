"use client";

import { Cart } from "@/@types/cart";
import { Product } from "@/@types/product";
import { ButtonField } from "@/components/button-element";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import { addProductInCart } from "@/utils/query";
import { CartItem } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    product: Product;
    userId?: string;
}

export const ProductActions = ({ product, userId }: Props) => {

    const [selectProduct, setSelectProduct] = useState<Cart>({
        product,
        qtd: 1
    });

    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async (selectProduct: Cart) => {
            const res = await addProductInCart(selectProduct);
            if (!res.status) {
                return toast({
                    variant: "destructive",
                    title: "Produto não adicionado",
                    description: res.message,
                    action: <Button variant={"destructive"} onClick={() => signIn('google')}>Fazer login</Button>
                });
            }
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cartItems"]
            });
        },
    });

    const { cartItem, setCartItem } = useCart();

    const { toast } = useToast();

    const handleAddProduct = () => {
        setSelectProduct({
            product,
            qtd: selectProduct.qtd + 1
        });
    }

    const handleRemoveProduct = () => {
        if (selectProduct.qtd >= 1) {
            setSelectProduct({
                product,
                qtd: selectProduct.qtd - 1
            });
        }

    }

    const handleAddProductToCart = async () => {
        mutation.mutate(selectProduct);
        if (mutation.error) {
            return alert("erro ao adicionar o produto");
        }
        return toast({
            title: "Produdo no carrinho",
            description: "Vá para o carrinho para finalizar a compra",
            action: <Button onClick={() => {
                router.push(`/products/cart/${userId}`);
            }}>Go to cart</Button>
        });
    }

    return (
        <div className="mt-5 flex justify-between items-center gap-5 max-sm:items-center">
            <div className="flex gap-5 rounded-3xl bg-[#F0F0F0] text-base justify-between items-center w-[170px] py-2 px-4">
                <button onClick={handleRemoveProduct} className="text-2xl">-</button>
                <p>{selectProduct.qtd}</p>
                <button onClick={handleAddProduct} className="text-2xl">+</button>
            </div>
            <ButtonField className="w-[400px] max-sm:w-full" onClick={handleAddProductToCart}>
                Add to cart
            </ButtonField>
        </div>
    );
}
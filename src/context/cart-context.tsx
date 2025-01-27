"use client";

import { CartItem } from "@/@types/cart";
import { createContext, ReactNode, useContext, useState } from "react";

type Context = {
    cartItem: CartItem[];
    setCartItem: (cartItem:CartItem[])=>void;
}

export const ContextCart = createContext<Context>({} as Context);

export const ContextCartProvider = ({ children }: { children: ReactNode }) => {

    const [cartItem, setCartItem] = useState<CartItem[]>([]);

    return(
        <ContextCart.Provider value={{cartItem, setCartItem}}>
            {children}
        </ContextCart.Provider>
    );
}

export const useCart = ()=>useContext(ContextCart);
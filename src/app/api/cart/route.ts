import { Cart } from "@/@types/cart";
import { getSession } from "@/lib/auth";
import { NextRequest } from "next/server";
import products from "@/db/products";
import users from "@/db/user";
import { User } from "@/@types/user";
import cart from "@/db/cart";

export async function POST(req: NextRequest) {
    const session = await getSession();
    if (!session) {
        return Response.json({ status: false, message: "faça login para adicionar o produto no carrinho" });
    }
    const body = await req.json();

    if (body) {

        const user = await users.findUserByEmail(session.user?.email as string);

        if (user) {
            const cartAdd = await products.addProductInCart(body.cart, user.id).catch((error) => {
                console.log("erro");
            });
            if (cartAdd) {
                return Response.json({ status: true, cart: cartAdd, message:"Produto adicionado no carrinho" });
            }
        }
    }
}

export async function DELETE(req: NextRequest) {
    const session = await getSession();
    if (!session) {
        return Response.json({ status: false, message: "faça login para remover o produto no carrinho" });
    }

    const body:{ cartId:string } = await req.json();
    const product = await cart.removeProductByid(body.cartId).catch((error)=>{
        return Response.json({ status:false });
    });

    return Response.json({ status: true, product });
}
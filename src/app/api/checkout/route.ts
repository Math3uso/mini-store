import { CartItem } from "@/@types/cart";
import { stripe } from "@/lib/stripe";
import { NextRequest } from "next/server";
import db from "@/db/products";

type ListItem = {
    // name: string;
    price: string;
    quantity: number;
}

export async function POST(req: NextRequest) {
    const body: { cart: CartItem[] } = await req.json();
    const { cart } = body;

    console.log(cart);

    let listItem:ListItem[] = [];

    for(let i in cart){
        const product = await db.getProductByid(cart[i].product.id);
        if(product){
            listItem.push({
                price:product.deafultPriceId as string,
                quantity: cart[i].qtd
            });
        }
    }

    const successUrl = `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXTAUTH_URL}/`;

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: "payment",
        line_items: listItem
    });

    return Response.json({ status: true, url: checkoutSession.url });
}
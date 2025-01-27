import { NextRequest, NextResponse } from "next/server";
import cartItem from "@/db/cart-item";
import { z } from "zod";

export const updateQuantitySchema = z.object({
    cartdItemId: z.string(),
    quantity: z.number(),
    type: z.enum(["increment","decrement"]),
});

export async function GET(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams;

    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ status: false });
    }

    const cart = await cartItem.getCartItem(id as string);

    if (!cart) return NextResponse.json({ status: false, message: "produto não encontrado" });

    return NextResponse.json({ status: true, cart });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { success, data } = updateQuantitySchema.safeParse(body);

    if(!success) return NextResponse.json({ status:false, message:"dados invalidos" });

    const updateCartItem = await cartItem.updateQuantity(data);

    return NextResponse.json({ status:true, updateCartItem });
}
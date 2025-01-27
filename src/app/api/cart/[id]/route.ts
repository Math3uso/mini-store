import { NextRequest } from "next/server";
import cart from "@/db/cart";

export async function GET(req: NextRequest, { params }: { params:{ id:string } }) {

    const cartProducts = await cart.getProductsFromCart(params.id);
    
    if(cartProducts && cartProducts.length > 0){
        return Response.json({ status:true, cartProducts });
    }

    return Response.json({ status:false, message:"Nenhum produto no carrinho" });
    
}
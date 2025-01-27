import { UpdateQuantity } from "@/@types/updateQuantity";
import prisma from "@/lib/prisma"

export default {
    getCartItem: async (cartItemId: string) => {
        return await prisma.cartItem.findFirst({
            where: { id: cartItemId }
        });
    },
    updateQuantity: async (config: UpdateQuantity)=>{
        return await prisma.cartItem.update({
            where:{ id: config.cartdItemId },
            data:{
                qtd: config.quantity
            }
        });
    }
}
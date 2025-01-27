import prisma from "@/lib/prisma"

export default {
    async getProductsFromCart(userId:string){
        return await prisma.cartItem.findMany({
            where:{ userId },
            select:{
                product:true,
                qtd:true,
                total:true,
                id:true
            }
        });
    },

    async removeProductByid(productId:string){
        return await prisma.cartItem.delete({
            where:{
                id:productId    
            }
        });
    }
}
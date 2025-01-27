import prisma from "@/lib/prisma";
import { User } from "next-auth";

export default {
    addUserToDatabase: async (user:User)=>{
        return await prisma.user.create({
            data:{
                name: user.name as string,
                email: user.email as string,
                imageUrl: user.image,
            }
        })
    },
    findUserByEmail: async (email:string) =>{
        return await prisma.user.findFirst({
            where:{ email }
        })
    }
}
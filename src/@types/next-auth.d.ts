import NextAuth from "next-auth"
import { User } from "./user"

export interface UserAuth{
    name:string;
    email:string;
    imageUrl:string;
    id:string;
}

declare module "next-auth"{
    interface Session{
        user:UserAuth;
    }
}
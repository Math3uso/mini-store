import { CartItem } from "./cart";

export type User = {
    id: string;
    name: string;
    email:string;
    imageUrl: string | null;
    cartItem?: CartItem[];
}
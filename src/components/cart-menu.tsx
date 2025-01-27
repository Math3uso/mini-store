import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { CartItem } from "@/@types/cart"

type Props = {
    cart: CartItem[];
}

export const CartMenu = ({ cart }: Props) => {
    <Sheet>
        <SheetTrigger>
            <button>
                <ShoppingCart />
            </button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Carrinho de compras</SheetTitle>
                <SheetDescription>
                    Adicione quantos produtos preferir
                </SheetDescription>
            </SheetHeader>
            <div>
                
            </div>
        </SheetContent>
    </Sheet>
}
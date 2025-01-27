import { Product } from "@/@types/product";
import Image from "next/image";
import Link from "next/link";

type Props = {
    product: Product;
}

export const ProductItem = ({ product }: Props) => {
    return (
        <Link href={`/products/${product.id}`} className="transition-all hover:scale-105">
            <div className="p-2 mb-3 cursor-pointer">
                <Image src={product.imageUrl} width={295} height={298} alt="" />
                <div className="font-bold flex justify-start gap-2 flex-col max-sm:gap-0">
                    <p className="text-lg max-sm:text-base">{product.name}</p>
                    <p className="text-2xl max-sm:text-xl">{product.price}</p>
                </div>
            </div>
        </Link>
    );
}
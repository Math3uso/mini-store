"use client";

import { getProducts } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "./product-item";
import { BuildSkeleton } from "../skeleton";

export const Product = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => await getProducts()
    });

    return (
        <div className="mt-2 grid grid-cols-3 max-sm:grid-cols-2">
            {isPending && Array.from({ length: 15 }).map((_, i) => (
                <BuildSkeleton key={i}/>
            ))}
            {data?.products.map(product => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
    );
}
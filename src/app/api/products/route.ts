import { FilterElement, FilterSelect, FilterTypes } from "@/@types/filter";
import { Product } from "@/@types/product";
import db from "@/db/products";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {

    const searchParams = req.nextUrl.searchParams;

    const filters: { [key: string]: string } = {};

    searchParams.forEach((value, key) => {
        filters[key] = value;
    });

    const isFilter = Object.keys(filters).length;
    if (isFilter === 0) {
        const products = await db.getAllProducts();
        return Response.json({ products });
    }

    const filterProducts = await db.getProductByFilter(filters);
    return NextResponse.json({ status: true, products: filterProducts });
}

export const POST = async (req: NextRequest) => {
    const body: { filters: FilterSelect[] } = await req.json();
    const filters: FilterElement = {};

    body.filters.map(filter => {
        filters[filter.type as FilterTypes] = filter.filter;
    });

    const products: Product[] | null = await db.getProductByFilter(filters);

    if (products) {
        return Response.json({ products });
    }

    return Response.json({ message: "foi" });
}
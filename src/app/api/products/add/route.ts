import { stripe } from "@/lib/stripe"
import Stripe from "stripe";
import dbProducs from "@/db/products";
import { Product } from "@/@types/product";

export const GET = async (req: Request) => {
    const products = await stripe.products.list({
        expand: ["data.default_price"]
    });

    const allSizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Larte', '3X-Large', '4X-Large'];

    const listProducts: Product[] = products.data.map(product => {

        const price = product.default_price as Stripe.Price;

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(price.unit_amount as number / 100),
            sizes: allSizes[Math.floor(Math.random() * allSizes.length)],
            category: '',
            priceValue: price.unit_amount as number /100,
            deafultPriceId: price.id
        }
    })

    const newProducs = await dbProducs .addProducts(listProducts);
    return Response.json({ status: true, newProducs });
}
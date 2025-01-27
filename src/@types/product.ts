export type Product = {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string | null
    sizes: string;
    category: string;
    priceValue: number;
    deafultPriceId: string | null;
}
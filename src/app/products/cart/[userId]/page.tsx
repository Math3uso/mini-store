import { ProductsCart } from "./_components/products-cart";

type Props = {
    params: {
        userId: string;
    }
}

const Page = async ({ params }: Props) => {

    return (
        <div className="mt-10 max-sm:flex max-sm:flex-col">
            <h1 className="text-4xl font-bold">Your Cart</h1>
            <ProductsCart id={params.userId} />
        </div>
    );
}


export default Page
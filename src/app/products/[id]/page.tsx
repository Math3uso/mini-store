import Image from "next/image";
import { ProductActions } from "./_components/product-actions";
import db from "@/db/products";
import { Product } from "@/@types/product";
import { getSession } from "@/lib/auth";

const Page = async ({ params }: { params: { id: string } }) => {

    const product = await db.getProductByid(params.id);
    const session = await getSession();

    if(!product){
        return <p>Erro ao buscar o produto</p>
    }

    return (
        <div className="p-3 mt-10 flex justify-center items-start gap-[5rem] max-sm:flex-col">
            <Image src={product.imageUrl} alt="" width={444} height={530} />
            <div>
                <div className="border-b pb-5">
                    <h1 className="font-bold text-4xl my-2 max-sm:text-2xl">{product.name}</h1>
                    <p className="font-bold text-3xl mb-2 max-sm:text-2xl   ">R$ 80,00</p>
                    <span className="font-medium text-base max-sm:text-sm text-black/60">{product.description ? product.description : "Produto sem descrição"}</span>
                </div>
                <ProductActions product={product as Product} userId={session? session.user.id: undefined}/>
            </div>
        </div>
    );
}

export default Page;
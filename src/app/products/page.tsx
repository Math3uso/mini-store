import { Filters } from "./_components/filter/filters";
import { Product } from "./_components/product/product";

const Page = ()=>{
    return(
        <div className="flex justify-center items-start gap-3 h-full">
            <div className="max-sm:hidden">
               <Filters/> 
            </div>
            <main className="flex-1 p-3">
                <div>
                    <h1 className="text-3xl font-bold">Produtos</h1>
                </div>
                <Product/>
            </main>
        </div>
    );
}

export default Page;
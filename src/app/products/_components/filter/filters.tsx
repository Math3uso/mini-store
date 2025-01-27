"use client";

import { useState } from "react";
import { FilterContent } from "./filter-content";
import { FilterItem } from "./filter-item";
import { category, sizes } from "@/utils/data";
import { Check, X } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { getProductsByFilters } from "@/utils/query";
import { RadioCards } from "@radix-ui/themes";

type Props = {
    setIsOpenMenu?: () => void;
}

export const Filters = ({ setIsOpenMenu }: Props) => {

    const queryClient = useQueryClient();

    const [filters, setFilters] = useState<{ [key: string]: string }>({});

    const handleUpdateProducts = async () => {
        let query = "";
        for (let i of Object.keys(filters)) {
            if (filters[i].trim() !== "" && filters[i] !== "todos") {
                query += `${i}=${filters[i]}&`;
            }
        }
        query = query.slice(-1) === "&" ? query.slice(0, -1) : query;

        await queryClient.invalidateQueries({
            queryKey: ['products']
        });
        await queryClient.fetchQuery({
            queryKey: ["products"],
            queryFn: async () => await getProductsByFilters(query)
        });
        setIsOpenMenu? setIsOpenMenu(): true;
    }

    const handleSetFilter = (key: string, value: string) => {
        setFilters({
            ...filters,
            [key]: value
        });
    }

    return (
        <div className="w-[290px] border rounded-3xl py-3 px-5 max-sm:w-full max-sm:p-0 max-sm:border-none">
            <p className="font-bold text-xl border-b pb-5 max-sm:hidden">Filters</p>
            <FilterContent>
                <FilterItem title="Categorias">
                    <RadioCards.Root onValueChange={evt => handleSetFilter('category', evt)} className="flex justify-center items-start flex-col">
                        {category.map((el, i) => (
                            <RadioCards.Item value={el} key={i} className={`group hover:bg-slate-50 w-full p-2 transition-all rounded-md cursor-pointer flex justify-between items-center`}>
                                <p className="font-light">{el}</p>
                                {filters.category === el &&
                                    <Check className="w-4" />
                                }
                            </RadioCards.Item>
                        ))}
                    </RadioCards.Root>
                </FilterItem>
                <FilterItem title="Tamanhos">
                    <RadioCards.Root onValueChange={evt => handleSetFilter('sizes', evt)} className="flex flex-wrap gap-3 pb-5">
                        {sizes.map((el, i) => (
                            <RadioCards.Item value={el} key={i} className={`py-3 px-5 rounded-3xl text-sm cursor-pointer transition-all hover:bg-black hover:text-white ${filters.sizes == el ? "bg-black text-white" : "bg-[#F0F0F0] text-black"}`}>
                                <p>{el}</p>
                            </RadioCards.Item >
                        ))}
                    </RadioCards.Root>
                </FilterItem>
            </FilterContent>
            <button onClick={handleUpdateProducts} className="p-4 rounded-3xl bg-black text-white text-base font-medium w-full mt-5">Apply Filter</button>
        </div>
    );
}
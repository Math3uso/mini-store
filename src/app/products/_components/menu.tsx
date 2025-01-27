"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Filters } from "./filter/filters";
import { useState } from "react";

export const MenuFilters = () => {

    const [isOpen,setIsOpen] = useState(false);

    const handleToggleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <Sheet open={isOpen} onOpenChange={handleToggleMenu}>
            <SheetTrigger asChild>
                <button onClick={handleToggleMenu} className={`sm:hidden transition-all`}>
                    <Menu />
                </button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader className="border-b pb-3">
                    <SheetTitle className="text-start">Filters</SheetTitle>
                </SheetHeader>
                <div>
                    <Filters setIsOpenMenu={handleToggleMenu}/>
                </div>
            </SheetContent>
        </Sheet>
    );
}
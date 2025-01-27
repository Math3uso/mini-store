import { ReactNode } from "react";

type Props = {
    title?:string;
    children:ReactNode;
}

export const FilterItem = ({ title, children } :Props)=>{
    return(
        <div className="w-full">
            <div className="text-start my-3">
                <p className="font-bold text-xl">{title? title: ""}</p>
            </div>
            <div className="border-b">
                {children}
            </div>
        </div>
    );
}
import { ReactNode } from "react";

type Props = {
    increment?: () => void;
    decrement?: () => void;
    children: ReactNode;
    className?:string;
}

export const ButtonCount = ({ decrement, increment, children, className }: Props) => {
    return (
        <div>
            <div className={`flex gap-5 rounded-3xl bg-[#F0F0F0] text-base justify-between items-center w-[140px] py-2 px-3 ${className}`}>
                <button onClick={decrement} className="text-2xl">-</button>
                {children}
                <button onClick={increment} className="text-2xl">+</button>
            </div>
        </div>
    );
}
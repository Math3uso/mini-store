import { ReactNode } from "react";

type Props = {
    variant?: "primary" | "secundary";
    children: ReactNode;
    className?: string;
    onClick?: ()=>void;
}

export const ButtonField = ({variant = "primary", children, className, onClick}: Props) => {
    return (
        <button onClick={onClick} className={`
            ${variant == "secundary" && 'bg-[#F0F0F0] text-black/60 hover:bg-black hover:text-white'}
            ${variant == "primary" && 'bg-black text-white hover:bg-black/80'}
            rounded-3xl px-4 py-3 transition-all ${className}`}>
            {children}
        </button>
    );
}
import { ReactNode } from "react";

export const FilterContent = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
            {children}
        </div>
    );
}
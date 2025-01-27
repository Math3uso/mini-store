import { X } from "lucide-react";

type Props = {
    show: boolean;
}

export const SearchElement = ({ show }: Props) => {
    return (
        <div className={`flex gap-5 border px-3 py-2 rounded-md justify-center items-center`}>
            <button>
                <X className="w-4" />
            </button>
            <input type="text" placeholder="Search for products..." className="bg-transparent w-full outline-none text-sm " />
        </div>
    );
}
"use client";

import { User } from "lucide-react";
import { signIn } from "next-auth/react";

export const ButtonLogin = () => {
    return (
        <button onClick={() => signIn()} className='cursor-pointer hover:scale-105 transition-all'>
            <User />
        </button>
    );
}
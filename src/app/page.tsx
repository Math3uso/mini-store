"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <button className="mx-10" onClick={()=>signIn('google')}>login</button> <br />
            <button onClick={()=>signOut()}>sair</button> <br />
            {/* <p>{session?.user?.name}</p> */}
            <Link href={"/products"}>
                Ir para produtos
            </Link>
        </div>
    );
}

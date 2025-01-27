"use client";

import { ArrowLeft, Search, ShoppingCart } from 'lucide-react';
import { Session } from 'next-auth';
import Link from 'next/link';
import { ButtonLogin } from '../button-login'; 
import { useState } from 'react';
import { MenuFilters } from '../menu'; 
import { useRouter, usePathname } from 'next/navigation';
import { UserDropDown } from './user-dropdown'; 

type Props = {
    session: Session | null;
}

export const Header = ({ session }: Props) => {

    const [show, setShow] = useState(true);

    const router = useRouter();
    const path = usePathname();

    return (
        <header className="my-5 flex justify-between items-center pb-5 border-b max-sm:pb-3">
            <div className='flex items-center gap-3'>
                {path !== "/products" &&
                    <button onClick={router.back}>
                        <ArrowLeft/>
                    </button>
                }
                {path === "/products" &&
                    <MenuFilters />
                }
                <h1 className={`font-bold text-4xl transition-all`}>Logo</h1>
            </div>
            <div className='flex  items-center gap-3'>
                <div className='flex w-[580px] gap-4 rounded-3xl bg-[#F0F0F0] p-3 items-center max-sm:hidden'>
                    <Search className='text-black/40' />
                    <input type='text' placeholder='Search for products...' className='outline-none bg-transparent w-full font-normal' />
                </div>

                <button onClick={() => setShow(!show)} className='sm:hidden'>
                    <Search className='text-black' />
                </button>
                <Link href={session?.user.id ? `/products/cart/${session.user.id}` : '/'}>
                    <ShoppingCart />
                </Link>
                {session &&
                    <UserDropDown imageUrl={session.user.imageUrl}/>
                }
                {!session &&
                    <ButtonLogin />
                }
            </div>
        </header>
    );
}
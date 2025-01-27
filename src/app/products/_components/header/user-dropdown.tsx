"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";

type Props = {
    imageUrl: string;
}

export const UserDropDown = ({ imageUrl }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Image className='rounded-full cursor-pointer' src={imageUrl || ''} alt='' width={30} height={30} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>sua conta</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/products" })}>
                        <LogOut color="red" />
                        <p className="text-red-600">Sair</p>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
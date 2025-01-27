import { ReactNode } from "react";
import { Header } from "./_components/header/header"; 
import { QueryProvider } from "@/utils/providers/query-provider";
import { getSession } from "@/lib/auth";
import { ContextCartProvider } from "@/context/cart-context";

const Layout = async ({ children }: { children: ReactNode }) => {

    const session = await getSession();

    return (
        <QueryProvider>
            <ContextCartProvider>
                <div className="bg-white">
                    <div className="p-3 max-w-[1500px] w-full m-auto ">
                        <Header session={session} />
                        {children}
                    </div>
                </div>
            </ContextCartProvider>
        </QueryProvider>
    );
}

export default Layout
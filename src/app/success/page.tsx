import { stripe } from "@/lib/stripe";

type Props = {
    searchParams : {
        session_id: string;
    }
}

const Page = async ({ searchParams  }: Props) => {

    const session = await stripe.checkout.sessions.retrieve(searchParams.session_id,{

    });

    console.log(session);

    return (
        <div className="flex justify-center items-center text-3xl h-[100dvh] text-center">
            <h1>Obrigado pela compra <strong>{session.customer_details?.name}</strong> seus produtos logo chegarão até você =)</h1>
        </div>
    );
}

export default Page;
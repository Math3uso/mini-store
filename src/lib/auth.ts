import { getServerSession, NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import db from "@/db/user";
import { UserAuth } from "@/@types/next-auth";

const authOptions: NextAuthOptions = {
    // secret: process.env.NEXTAUTH_URL as string,
    providers: [
        GoogleProvider({
            id: 'google',
            clientId: process.env.GOOGLE_PUBLIC_KEY as string,
            clientSecret: process.env.GOOGLE_SECRET_KEY as string,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            try {
                if (user) {
                    const verifiUser = await db.findUserByEmail(user.email as string);
                    if (verifiUser) {
                        return true;
                    }
                    const isAlowwedToSignIn = await db.addUserToDatabase(user as User);
                    return true;
                }
                return false;
            } catch (erro) {
                return false;
            }

        },

        async jwt({ token, user }){
            if(user){
                const userId = await db.findUserByEmail(user.email as string);
                token.user = userId;
            }

            return token;
        },

        async session({ token, session }){
            if(token) session.user = token.user as UserAuth;

            return session;
        }
    },

}

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
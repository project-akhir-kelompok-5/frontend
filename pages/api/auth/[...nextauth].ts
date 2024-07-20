import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials: any, req) {
        return {
          ...credentials,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      return {
        ...token,
        ...user,
      };
    },
    async session({ session, user, token }) {
      session.user.id = Number(token.id);
      session.user.nama = token.nama;
      session.user.email = token.email;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.role = token.role;
      session.user.NIK = token.NIK;

      return session;
    },
  },

  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/error",
  },
};

export default NextAuth(authOptions);
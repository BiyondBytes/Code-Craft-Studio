import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

const nextAuthConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,

};

export default nextAuthConfig satisfies NextAuthConfig;

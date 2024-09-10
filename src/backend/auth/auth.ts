import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { dataBasePrisma } from "../../../prisma/databasePrisma";
import { Role } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ token, session }) {
      console.log(token, "token", session, "session")
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }

      if (session.user) {
        session.user.userId = token.userId as string;
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.image = token.picture as string;
      }

      return session;
    },
    async jwt({ token }) {
      try {
        dataBasePrisma.$connect();
        if (!token.sub) return token;
        const existingUser = await dataBasePrisma.user.findUnique({
          where: { email: token.email as string },
        });
        var newUser;




        if (!existingUser) {
          newUser = await dataBasePrisma.user.create({
            data: {
              email: token.email,
              name: token.name,
              role: Role.SUBACCOUNT_USER,
              image: token.picture,
            },
          });
          token.role = newUser.role;
          token.name = newUser.name;
          token.email = newUser.email;
          token.userId = newUser.id;
          console.log(newUser, "user")

          return token;
        }
        token.name = existingUser.name;
        token.email = existingUser.email;
        token.role = existingUser.role;
        token.userId = existingUser.id;
        token.image = existingUser.image;

        return token;
      } finally {
        await dataBasePrisma.$disconnect();
      }

    },
    // New redirect callback
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback running", url, baseUrl);
      return process.env.NEXTAUTH_URL || baseUrl;
    },

  },

  session: { strategy: "jwt" },


  ...authConfig,
});



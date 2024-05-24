import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          const user = await fetch(
            `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/signin`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //   "Content-Type": "application/x-www-form-urlencoded",
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );
          console.log(user);
          return { success: true };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: { strategy: "jwt" },

  // callbacks: {
  //   async jwt({ token, user, session, trigger }) {
  //     if (user) {
  //       const u = user as unknown as any;
  //       return {
  //         ...token,
  //         id: u.id,
  //       };
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         _id: token.id,
  //         name: token.name,
  //       },
  //     };
  //   },
  // },
});

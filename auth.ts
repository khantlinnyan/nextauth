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
          ).then((res) => res.json());

          return { success: true };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
});

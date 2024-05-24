"use server";

import { signIn } from "@/auth";
import { signInSchema, signUpSchema } from "@/lib/zod";
export async function signInAuth(
  data: SignInError,
  formData: FormData
): Promise<SignInError> {
  const result = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (result?.success) {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/",
    });
    return { success: true };
  } else {
    return { success: false, error: result?.error?.flatten().fieldErrors };
  }
}

export async function signUp(
  data: SignUpError,
  formData: FormData
): Promise<SignUpError> {
  const result = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (result.success) {
    try {
      const user = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            //   "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
          }),
        }
      )
        .then((res) => {
          console.log("signup response::", res);
          return res.json();
        })
        .catch((error) => {
          return error;
        });

      return { success: true };
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(result.error.flatten().fieldErrors);
  return { success: false, error: result?.error?.flatten().fieldErrors };
}

export interface SignInError {
  error?: { email?: string[]; password?: string[] };
  success: boolean;
}
export interface SignUpError {
  error?: { name?: string[]; email?: string[]; password?: string[] };
  success: boolean;
}

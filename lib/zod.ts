import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z
    .string()
    .min(6)
    .max(20, "Password is too long!")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
      "Password must contain at least one letter, one number, and one special character"
    ),
});

export const signUpSchema = z.object({
  name: z.string().min(3, "Name is too short!").max(20, "Name is too long!"),
  email: z.string().email("Email is invalid"),
  password: z
    .string()
    .min(6)
    .max(20, "Password is too long!")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
      "Password must contain at least one letter, one number, and one special character"
    ),
});

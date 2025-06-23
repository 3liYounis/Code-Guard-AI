import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email("Invalid e-mail"),
    username: z
      .string()
      .regex(/^[A-Za-z][A-Za-z0-9_]{2,15}$/, "3-22 chars"),
    password: z
      .string()
      .min(8, "Min 8 characters")
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, "Must contain atleast a letter & a number"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.string().email("Invalid e-mail"),
  password: z.string(),
});

export type SignUpData = z.infer<typeof signUpSchema>;
export type SignInData = z.infer<typeof signInSchema>;

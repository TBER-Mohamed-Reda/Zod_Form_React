import { z } from "zod";

export const RegisterSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(4, { message: "Firstname is more than 4 characters" })
      .toUpperCase(),
    lastName: z
      .string()
      .trim()
      .min(3, { message: "Lastname is more than 3 characters" }),
    email: z.string().refine(
      (value) => {
        const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/i;
        return emailRegex.test(value);
      },
      { message: "Invalid email format. The format should be 'xxx@gmail.com'." }
    ),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[A-Z]/, {
        message: "Password must start with an uppercase letter",
      }),
    confirmPassword: z.string(),
    acceptTerms: z
      .literal(true,{
        errorMap: () => ({ message: "You must accept Terms and Conditions" }),
      })
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path:["confirmPassword"]
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

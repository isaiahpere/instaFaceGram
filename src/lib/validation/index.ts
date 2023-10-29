import * as z from "zod";

// SignupValidationSchema
export const SignupValidationSchema = z.object({
  name: z.string().min(2, { message: "Must be at least 2 characters long" }),
  username: z
    .string()
    .min(2, { message: "Must be at least 2 characters long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Must be at least 8 characters long" }),
});

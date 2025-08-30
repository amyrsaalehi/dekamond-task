import { z } from "zod";

const IRAN_PHONE_REGEX = /^(?:09\d{9}|\+989\d{9}|00989\d{9})$/;

export const loginSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .regex(IRAN_PHONE_REGEX, "Phone number is not valid"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
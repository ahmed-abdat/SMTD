import { z } from "zod";

export const FormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  companyName: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(8, { message: "Phone number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type FormData = z.infer<typeof FormSchema>;

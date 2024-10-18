import * as z from "zod";

export const CreateClientSchema = z.object({
  name: z.string().min(1, {
    message: "This field cannot be empty",
  }),
  phone: z.string().min(9, {
    message: "Enter a valid number",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  address: z.string().min(1, {
    message: "This field cannot be empty",
  }),
});

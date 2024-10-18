import * as z from "zod";

export const CreateClientSchema = z.object({
  name: z.string().min(1, {
    message: "This field cannot be empty",
  }),
  phone: z.string().min(9, {
    message: "Enter a valid number",
  }),
  email: z.string().min(1, {
    message: "This field cannot be empty",
  }),
  address: z.string().min(1, {
    message: "This field cannot be empty",
  }),
});

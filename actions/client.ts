"use server";

import { error } from "console";
import * as z from "zod";

import { getClient } from "@/data/user";
import { db } from "@/lib/db";
import { CreateClientSchema } from "@/schemas";

export const CreateClient = async (
  values: z.infer<typeof CreateClientSchema>
) => {
  const validationFields = CreateClientSchema.safeParse(values);

  if (!validationFields.success) {
    return { error: "Invalid fields" };
  }

  const { address, email, name, phone } = validationFields.data;

  const existingClient = await getClient(phone);

  if (existingClient) {
    return { error: "Client already exists on this phone" };
  }

  const client = await db.client.create({
    data: {
      email,
      name,
      address,
      phone,
    },
  });

  return client.id;
};

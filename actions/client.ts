"use server";

import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs/server";
import * as z from "zod";

import { getClient } from "@/data/user";
import { db } from "@/lib/db";
import { CreateClientSchema } from "@/schemas";

export const CreateClient = async (
  values: z.infer<typeof CreateClientSchema>
) => {
  const admin = auth();

  if (!admin) {
    return { error: "Unauthorised" };
  }
  
  const validationFields = CreateClientSchema.safeParse(values);

  if (!validationFields.success) {
    return { error: "Invalid fields" };
  }

  const { address, email, name, phone } = validationFields.data;

  const existingClient = await getClient({ email, phone });

  if (existingClient) {
    return { error: "Client exists" };
  }

  const client = await db.client.create({
    data: {
      email,
      name,
      address,
      phone,
    },
  });

  redirect(`/client/${client.id}`);
};

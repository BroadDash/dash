import { db } from "@/lib/db";

export const getClient = async (email: string) => {
  try {
    const client = await db.client.findUnique({
      where: {
        email,
      },
    });
    return client;
  } catch (error) {
    return null;
  }
};

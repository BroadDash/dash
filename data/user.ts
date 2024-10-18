import { db } from "@/lib/db";

interface GetClientProps {
  email: string;
  phone: string;
}

export const getClient = async ({ email, phone }: GetClientProps) => {
  try {
    const client = await db.client.findFirst({
      where: {
        email,
        phone,
      },
    });
    return client;
  } catch (error) {
    return null;
  }
};

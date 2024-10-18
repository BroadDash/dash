import { redirect } from "next/navigation";

import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const AdminProfile = async () => {
  const admin = await currentUser();

  if (!admin) {
    return redirect("/");
  }

  const existingAdmin = await db.admin.findUnique({
    where: {
      id: admin.id,
    },
  });

  if (!existingAdmin) {
    const newAdminProfile = await db.admin.create({
      data: {
        id: admin.id,
      },
    });
    return newAdminProfile;
  }

  return existingAdmin;
};

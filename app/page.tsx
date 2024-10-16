import { redirect } from "next/navigation";

import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { CreateClientForm } from "@/components/client-form";
import { db } from "@/lib/db";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  const existingAdmin = await db.admin.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!existingAdmin) {
    const newAdminProfile = await db.admin.create({
      data: {
        id: user.id,
      },
    });
    return newAdminProfile;
  }

  return (
    <div className="w-full">
      <UserButton />
      <div className="flex items-center justify-center">
        <CreateClientForm />
      </div>
    </div>
  );
}

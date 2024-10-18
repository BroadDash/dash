import { redirect } from "next/navigation";

import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { CreateClientModal } from "@/components/modals/create-client-modal";
import { db } from "@/lib/db";

export default async function Dashboard() {
  return (
    <div className="w-full">
      <UserButton />
      <CreateClientModal />
    </div>
  );
}

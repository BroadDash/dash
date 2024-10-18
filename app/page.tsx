import { redirect } from "next/navigation";

import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export default async function Dashboard() {
  return (
    <div className="w-full">
      <UserButton />
    </div>
  );
}

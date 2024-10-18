import { NextResponse } from "next/server";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { name, phone, email, address } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newClient = await db.client.create({
      data: {
        name,
        phone,
        email,
        address,
      },
    });
    return NextResponse.json(newClient);
  } catch (error) {
    console.log("[Client]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

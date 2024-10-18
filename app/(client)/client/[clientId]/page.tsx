import React from "react";

import { db } from "@/lib/db";

const ClientPage = async ({ params }: { params: { clientId: string } }) => {
  const client = await db.client.findUnique({
    where: {
      id: params.clientId,
    },
  });
  return <div>{client?.name}</div>;
};

export default ClientPage;

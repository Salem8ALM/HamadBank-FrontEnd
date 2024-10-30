import { getProfile } from "@/api/actions/auth";
import Transactions from "@/components/Transactions";
import { getUser } from "@/lib/token";
import React from "react";

export default async function page() {
  const user = await getUser();
  console.log(user);
  return (
    <div>
      <Transactions user={user} />
    </div>
  );
}

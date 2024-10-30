import UserProfile from "@/components/[userId]/page";
import React from "react";

export default async function page({ params }) {
  const { user_Id } = await params;
  return (
    <div>
      <UserProfile userId={user_Id} />
    </div>
  );
}

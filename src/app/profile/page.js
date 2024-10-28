import { getProfile } from "@/api/actions/auth";
import ProfileCard from "@/components/MeProfile/ProfileCard";
import React from "react";
//Profile page
export default async function UserProfile() {
  const user = await getProfile();
  return (
    <div>
      <div></div>
      <h2 className="text-center text-5xl font-extrabold text-white mt-12 mb-8">
        My Profile
      </h2>
      <ProfileCard user={user} />
    </div>
  );
}

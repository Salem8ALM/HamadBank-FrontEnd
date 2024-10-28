"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserById } from "@/api/actions/auth";

function UserProfile() {
  const router = useRouter();
  const { userId } = router.query; // Retrieve the user ID from the URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      async function fetchUserData() {
        try {
          console.log("Fetching data for user ID:", userId);
          const userData = await getUserById(userId);
          console.log("Fetched user data:", userData);
          setUser(userData);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
      fetchUserData();
    }
  }, [userId]);

  if (user === null) {
    return <p>Loading user data...</p>;
  }

  if (!user || !user.username) {
    return <p>User not found or data missing.</p>;
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg text-center text-white">
        <img
          src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
          alt={user.username}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{user.username}</h2>
        <p className="text-lg">Balance: ${user.balance}</p>
      </div>
    </div>
  );
}

export default UserProfile;

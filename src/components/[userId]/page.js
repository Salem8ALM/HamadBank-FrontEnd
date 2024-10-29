"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserById } from "@/api/actions/auth";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { transferFunds } from "@/api/actions/auth";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return (
      <div>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }

  if (!user || !user.username) {
    return <p>User not found or data missing.</p>;
  }

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-gray-500 p-6 text-center text-black h-96 w-96">
        <img
          src={
            user.image
              ? `https://react-bank-project.eapi.joincoded.com/${user.image}`
              : "/—Pngtree—user profile avatar_13369988.png"
          }
          alt={user.username}
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
        />

        <h2 className="text-2xl font-bold mb-2">{user.username}</h2>
        <p className="text-lg">Balance: ${user.balance}</p>
        <button onClick={() => transferFunds(10, user.username)}>
          Transfer $10 to {user.username}
        </button>
      </div>
    </div>
  );
}

export default UserProfile;

"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserById, revalidateGivenPath } from "@/api/actions/auth";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { transferFunds } from "@/api/actions/auth";
import { revalidatePath } from "next/cache";
import { redirect, usePathname } from "next/navigation";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [transferAmount, setTransferAmount] = useState(0);

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

  async function handleOnClick(e) {
    e.preventDefault();
    await transferFunds(transferAmount, user.username);
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 text-center text-gray-800 h-auto w-80 rounded-lg shadow-lg">
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
        <p className="text-lg font-medium text-gray-600">
          Balance: <span className="text-green-500">${user.balance}</span>
        </p>
        <form className="m-3">
          <h1 className="font-bold">Transfer to {user.username}</h1>
          <div className="flex flex-row justify-center items-center">
            <p className="mr-2">$</p>
            <input
              className="m-2 bg-[--background]"
              type="number"
              placeholder="Deposit amount"
              onChange={(e) => setTransferAmount(e.target.value)}
              value={transferAmount}
              onKeyDown={(event) => {
                if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <button
            onClick={handleOnClick}
            className="bg-[--foreground] text-[--background] rounded-md p-2 mt-2 hover:scale-110 duration-200"
          >
            Transfer ${transferAmount}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;

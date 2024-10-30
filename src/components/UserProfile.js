"use client";

import { getProfile, transferFunds, updateProfile } from "@/api/actions/auth";
import { generateDepositLink } from "@/api/actions/actions";
import React, { useEffect, useState } from "react";
import { getUser } from "@/lib/token";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

// Profile page
export default function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [updatedImage, setUpdatedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generatedLink, setGeneratedLink] = useState(null);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferAmountToUser, setTransferAmountToUser] = useState("");
  const [transferUsername, setTransferUsername] = useState("");

  const router = useRouter();

  // Fetch data and show loading animation before everything is fetched
  useEffect(() => {
    const fetchUserData = async () => {
      const profile = await getProfile();
      const userData = await getUser();
      setUserProfile(profile);
      setUser(userData);
      setLoading(false);
    };
    fetchUserData();
  }, [transferAmountToUser]);

  const handleFileChange = (e) => {
    setUpdatedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!updatedImage) {
      alert("Please choose an image file before saving.");
      return;
    }
    const updatedProfile = await updateProfile(updatedImage);
    console.log("Profile updated:", updatedProfile);
    window.location.reload();
  };

  const handleGenerateLink = async (e) => {
    e.preventDefault();
    setGeneratedLink(generateDepositLink(userProfile.username, transferAmount));
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy the link", error);
    }
  };

  async function handleTransfer(e) {
    e.preventDefault();
    try {
      await transferFunds(transferAmountToUser, transferUsername);
      router.refresh();
      setTransferAmountToUser(""); // Reset amount after transfer
      setTransferUsername("");
    } catch (error) {
      console.error("Transfer failed:", error);
    }
  }

  if (loading)
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

  return (
    <div className="flex flex-col items-center justify-center my-10 ">
      <h1 className="text-3xl font-bold mb-6">Bank Profile</h1>
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 w-full px-4 justify-center">
        {/* Profile Section */}
        <div className="bg-white p-6 md:p-8 rounded-md shadow-md w-full md:w-[30rem]">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-6">
            <img
              src={`https://react-bank-project.eapi.joincoded.com/${userProfile.image}`}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-red-500 shadow-md object-cover mb-4 md:mb-0"
              alt="User Profile"
            />
            <span className="font-semibold text-xl text-center md:text-left">
              {userProfile.username}
            </span>
          </div>
          <div className="mb-4">
            <p className="font-medium">Account ID</p>
            <div className="bg-gray-100 p-2 rounded-md mt-1 text-center text-gray-800">
              {user._id}
            </div>
          </div>
          <div>
            <p className="font-medium">Current Balance</p>
            <div className="bg-gray-100 p-2 rounded-md mt-1 text-center">
              <p
                className={`${
                  userProfile.balance > 0
                    ? "text-green-500"
                    : "text-[--foreground]"
                }`}
              >
                {userProfile.balance} KWD
              </p>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white p-6 md:p-8 rounded-md shadow-md w-full md:w-[40rem]">
          <div className="mb-6">
            <p className="font-medium mb-2">Change your profile picture</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-gray-500 text-white rounded-md p-2 cursor-pointer"
                aria-label="Browse images"
              />
              <button
                type="submit"
                className="bg-gray-600 text-white p-2 rounded-md"
              >
                Upload
              </button>
            </form>
          </div>

          {/* Transfer to user */}
          <div className="mt-6">
            <p className="font-medium mb-2">Transfer to user</p>
            <form
              onSubmit={handleTransfer}
              className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0"
            >
              <input
                type="text"
                placeholder="Enter username"
                className="p-2 border rounded-md flex-1"
                value={transferUsername}
                onChange={(e) => setTransferUsername(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter amount"
                className="p-2 border rounded-md flex-1"
                value={transferAmountToUser}
                onChange={(e) => setTransferAmountToUser(e.target.value)}
                onKeyDown={(event) => {
                  if (!/[0-9]/.test(event.key) && event.keyCode !== 8) {
                    event.preventDefault();
                  }
                }}
              />
              <button className="bg-gray-600 text-white p-2 rounded-md">
                Send
              </button>
            </form>
          </div>

          {/* Generate deposit link */}
          <div className="mt-6">
            <p className="font-medium mb-2">Generate deposit link</p>
            <form
              onSubmit={handleGenerateLink}
              className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0"
            >
              <input
                type="number"
                placeholder="Enter amount"
                className="p-2 border rounded-md flex-1"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                onKeyDown={(event) => {
                  if (!/[0-9]/.test(event.key) && event.keyCode !== 8) {
                    event.preventDefault();
                  }
                }}
              />
              <button className="bg-gray-600 text-white p-2 rounded-md">
                Generate
              </button>
            </form>
            {generatedLink && (
              <div className="flex flex-col items-center mt-4 gap-2">
                <a
                  href={generatedLink}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {generatedLink}
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Copy Link
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { updateProfile, withdraw, addDeposit } from "@/api/actions/auth";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { revalidatePath } from "next/cache";
const ProfileCardLoader = dynamic(() => import("./ProfileCardLoader"), {
  ssr: false,
});
function ProfileCard({ user }) {
  const [updatedImage, setUpdatedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleFileChange = (e) => {
    setUpdatedImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ensure the user upload before he save
    if (!updatedImage) {
      alert("Please choose an image file before saving.");
      return;
    }
    const updatedProfile = await updateProfile(updatedImage);
    console.log("Profile updated:", updatedProfile);
    //refresh the page
    window.location.reload();
  };

  return (
    <div className=" p-8 rounded-lg shadow-lg max-w-sm mx-auto text-center">
      {loading ? (
        <ProfileCardLoader />
      ) : (
        <div>
          <img
            src={
              user.image
                ? `https://react-bank-project.eapi.joincoded.com/${user.image}`
                : "/—Pngtree—user profile avatar_13369988.png"
            }
            alt={user.username || "User profile picture"}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
          />
          <h2 className="text-2xl font-semibold text-black">{user.username}</h2>
          <div className="text-black-300 mt-2 text-lg">
            <span className="font-medium">Balance:</span> ${user.balance}
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block text-black  font-medium mb-2">
              Upload a Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 mb-4"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Save
            </button>
          </form>
          <div
            className="text-red-400"
            onClick={() => {
              withdraw(10);
            }}
          >
            <button>withdraw</button>
          </div>
          <div
            className="text-green-400"
            onClick={() => {
              addDeposit(999);
            }}
          >
            <button>Deposit 999</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;

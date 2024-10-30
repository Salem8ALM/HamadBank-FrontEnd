"use client";
import { updateProfile, withdraw, addDeposit } from "@/api/actions/auth";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { revalidatePath } from "next/cache";
import { generateDepositLink } from "@/api/actions/actions";
const ProfileCardLoader = dynamic(() => import("./ProfileCardLoader"), {
  ssr: false,
});
function ProfileCard({ user }) {
  const [updatedImage, setUpdatedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generatedLink, setGeneratedLink] = useState(null);
  const [transferAmount, setTransferAmount] = useState(0);

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

  const handleGenerateLink = async (e) => {
    e.preventDefault();

    setGeneratedLink(generateDepositLink(user.username, transferAmount));
  };

  // Function to copy the link to clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy the link", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Full screen flex container */}
      <div className="flex-grow">
        {" "}
        {/* This div will grow taking all available space pushing the Footer down */}
        <div className="p-8 rounded-lg shadow-lg max-w-sm mx-auto text-center space-y-4">
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
              <h2 className="text-2xl font-semibold text-black">
                {user.username}
              </h2>
              <div className="text-black-300 mt-2 text-lg">
                <span className="font-medium">Balance:</span>
                <p
                  className={`${
                    user.balance > 0 ? "text-green-500" : "text-[--foreground]"
                  } font-medium`}
                >
                  ${user.balance}
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-black font-medium">
                  Upload a Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                />
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  Save
                </button>
              </form>
              <form
                onSubmit={handleGenerateLink}
                className="flex flex-col gap-2 mt-3"
              >
                <h1 className="text-xl font-bold">Generate Transfer Link</h1>
                <div className="flex justify-center items-center gap-2">
                  <p>$</p>
                  <input
                    type="number"
                    placeholder="Deposit amount"
                    onChange={(e) => setTransferAmount(e.target.value)}
                    value={transferAmount}
                    className="input-number"
                    onKeyDown={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[--foreground] text-[--background] p-1 rounded-md"
                >
                  Generate
                </button>
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
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

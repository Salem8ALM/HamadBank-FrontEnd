"use client";
import { withdraw, addDeposit, getProfile } from "@/api/actions/auth";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

function LoggedHomePage() {
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("deposit"); // "deposit" or "withdraw"
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      const profile = await getProfile();
      setUser(profile);
    }
    fetchUserProfile();
  }, [amount]);

  if (!user) return null; // Render nothing until user data is available

  const handleAction = () => {
    if (action === "deposit") {
      addDeposit(Number(amount));
    } else {
      withdraw(Number(amount));
    }
    setAmount(""); // Clear the input after action
  };

  const setPresetAmount = (value) => {
    setAmount(value.toString()); // Convert to string for controlled input field
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-700 text-white text-lg font-semibold mb-8 p-8 rounded-xl text-center shadow-lg">
          <p className="text-sm font-light opacity-80">
            Your Available Balance
          </p>
          <p className="text-4xl font-bold mt-2">
            {user.balance}{" "}
            <span className="text-4xl font-bold mt-2 text-green-500">KWD</span>
          </p>
        </div>

        {/* Toggle for Action Selection */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex items-center space-x-4">
            <span
              className={`font-medium ${
                action === "withdraw" ? "text-red-500" : "text-gray-500"
              }`}
            >
              Withdraw
            </span>
            <Switch
              checked={action === "deposit"}
              onCheckedChange={(checked) =>
                setAction(checked ? "deposit" : "withdraw")
              }
              className="transform scale-150 transition duration-300 ease-in-out"
            />
            <span
              className={`font-medium ${
                action === "deposit" ? "text-green-500" : "text-gray-500"
              }`}
            >
              Deposit
            </span>
          </div>
        </div>

        {/* Amount Input and Preset Buttons */}
        <div className="space-y-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 border border-gray-300 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-200"
          />

          {/* Preset Amount Buttons */}
          <div className="flex space-x-2 justify-center">
            {[10, 20, 50, 100, 250].map((value) => (
              <button
                key={value}
                onClick={() => setPresetAmount(value)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow transition-transform duration-150 transform hover:scale-105 active:scale-95"
              >
                {value} KD
              </button>
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={handleAction}
            className={`w-full py-3 rounded-lg text-lg font-semibold text-white shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out ${
              action === "deposit"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {action === "deposit" ? "Deposit" : "Withdraw"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoggedHomePage;

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-md w-full shadow-blue-400">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-red-300 to-red-500 text-white text-lg font-semibold mb-8 p-8 rounded-xl text-center shadow-lg">
          <p className="text-sm font-light opacity-80">
            Your Available Balance
          </p>
          <p className="text-4xl font-bold mt-2">{user.balance} KWD</p>
        </div>

        {/* Toggle for Action Selection using ShadCN Switch */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center space-x-4">
            <span
              className={`font-medium ${
                action === "withdraw" ? "text-red-500" : "text-gray-500"
              }`}
            >
              {/* Withdraw */}
            </span>
            <Switch
              checked={action === "deposit"}
              onCheckedChange={(checked) =>
                setAction(checked ? "deposit" : "withdraw")
              }
              className="transform scale-150 transition duration-300 ease-in-out shadow-sm"
            />
            <span
              className={`font-medium ${
                action === "deposit" ? "text-green-500" : "text-gray-500"
              }`}
            >
              {/* Deposit */}
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
            className="p-3 border border-gray-300 rounded-lg w-full text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition duration-200"
            onKeyDown={(event) => {
              if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault();
              }
            }}
          />

          {/* Preset Amount Buttons */}
          <div className="flex space-x-2 justify-center">
            {[10, 20, 50, 100, 250].map((value) => (
              <button
                key={value}
                onClick={() => setPresetAmount(value)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-md hover:shadow-lg transition-transform duration-150 transform hover:scale-105 active:scale-95"
              >
                <span>{value}</span>
                <span className="text-[10px] leading-none text-gray-500 ml-1">
                  K.D
                </span>
              </button>
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={handleAction}
            className={`w-full py-3 rounded-lg text-lg font-semibold text-white duration-300 transform hover:scale-105 hover:duration-200 ${
              action === "deposit"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            } shadow-md hover:shadow-lg active:scale-95`}
          >
            {action === "deposit" ? "Deposit" : "Withdraw"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoggedHomePage;

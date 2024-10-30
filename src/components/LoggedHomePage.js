"use client";
import { withdraw, addDeposit, getProfile } from "@/api/actions/auth";
import { useState, useEffect } from "react";

function LoggedHomePage({ user }) {
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("deposit"); // "deposit" or "withdraw"

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
    <div className="flex justify-center items-center mt-20 bg-[--background] flex-col">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-400 text-gray-500s text-lg font-semibold mb-8 p-6 rounded-xl text-center shadow-md">
          <p className="text-sm font-light">Current Balance</p>
          <p className="text-3xl font-bold mt-2">${user.balance} KWD</p>
        </div>

        {/* Toggle for Action Selection */}
        <div className="flex justify-center items-center mb-8">
          <div
            onClick={() =>
              setAction(action === "deposit" ? "withdraw" : "deposit")
            }
            className={`relative w-20 h-12 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
              action === "deposit" ? "bg-green-600" : "bg-red-600"
            } shadow-lg border-2 border-opacity-20 border-gray-200`}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                action === "deposit" ? "translate-x-1" : "translate-x-10"
              }`}
            ></div>
          </div>
        </div>

        {/* Amount Input and Preset Buttons */}
        <div className="space-y-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(event) => {
              if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault();
              }
            }}
            placeholder="Enter amount"
            className="p-3 border rounded-lg w-full text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />

          {/* Preset Amount Buttons */}
          <div className="flex space-x-2 justify-center">
            {[10, 20, 50, 100, 250].map((value) => (
              <button
                key={value}
                onClick={() => setPresetAmount(value)}
                className="px-4 py-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow hover:from-gray-200 hover:to-gray-300 transition-transform duration-150 transform hover:scale-105 active:scale-95"
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
            className={`w-full py-3 rounded-lg text-lg font-semibold tracking-wide text-white transition-colors duration-300 ${
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

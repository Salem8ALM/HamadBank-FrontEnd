"use client";

import React from "react";
import { redirect, useSearchParams } from "next/navigation";
import { transferFunds } from "@/api/actions/auth";

function TransferPage() {
  async function handleOnClick() {
    await transferFunds(amount, username);
    redirect("/");
  }

  const searchParams = useSearchParams();

  const username = searchParams.get("username");
  const amount = searchParams.get("amount");
  return (
    <div className="m-auto bg-white mt-52 w-96 text-center shadow-lg p-4 rounded-lg">
      <h1 className="text-xl font-bold m-2">Transfer Funds</h1>
      <p className="m-2">To: {username}</p>
      <p className="m-2">${amount}</p>
      <button
        className="text-[--background] bg-[--foreground] hover:scale-110 duration-200 rounded-md p-2"
        onClick={handleOnClick}
      >
        Transfer
      </button>
    </div>
  );
}

export default TransferPage;

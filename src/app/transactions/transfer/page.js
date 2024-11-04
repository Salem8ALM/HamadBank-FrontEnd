"use client";

import React from "react";
import { redirect, useSearchParams } from "next/navigation";
import { transferFunds } from "@/api/actions/auth";
import Image from "next/image";
import confirmImg from "@/assets/confirm-icon.svg";

function TransferPage() {
  async function handleOnClick() {
    await transferFunds(amount, username);
    redirect("/");
  }

  const searchParams = useSearchParams();

  const username = searchParams.get("username");
  const amount = searchParams.get("amount");
  return (
    <div className=" bg-white  h-[20rem]   text-center shadow-lg pt-16 rounded-lg m-10 md:m-32 md:ml-80 md:mr-80">
      <div className=" flex justify-center">
        <Image
          src={confirmImg}
          width={50}
          height={20}
          alt="Boubyan Bank Debit Cards"
        />
      </div>

      <h1 className="text-xl font-bold m-2">Transfer Funds</h1>
      <p className="m-2">To: {username}</p>
      <p className="m-2">${amount}</p>
      <button
        className="text-white bg-black hover:scale-110 duration-200 rounded-md p-2"
        onClick={handleOnClick}
      >
        Transfer
      </button>
    </div>
  );
}

export default TransferPage;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

//Importing Usercard loader with dynamic to avoid getting hydration error
import dynamic from "next/dynamic";
const UserCardLoader = dynamic(() => import("./UserCardLoader"), {
  ssr: false,
});

function UserList({ users }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <UserCardLoader key={index} />
          ))
        : users.map((user) => (
            <div
              key={user._id}
              className="bg-white p-4 border rounded-md text-center shadow-md hover:shadow-lg"
            >
              <img
                src={
                  user.image
                    ? `https://react-bank-project.eapi.joincoded.com/${user.image}`
                    : "—Pngtree—user profile avatar_13369988.png"
                }
                alt={user.username}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
              />
              <h3 className="text-lg font-semibold text-black">
                {user.username}
              </h3>
              <h3 className="text-lg font-semibold text-black">
                <span>Balance: </span>
                {user.balance}
              </h3>
              <Link
                href={`/profile/${user._id}`}
                className="ml-2 px-2 py-1 text-black rounded-md hover:bg-green-600 transition-colors"
              >
                Transfer
              </Link>
            </div>
          ))}
    </div>
  );
}

export default UserList;

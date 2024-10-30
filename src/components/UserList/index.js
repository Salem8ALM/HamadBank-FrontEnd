"use client";

import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import UserCard from "./UserCard";
// Dynamic import to avoid hydration errors
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
    <div className="bg-white-900 min-h-screen h-screen flex items-center justify-center inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-12 py-6 bg-white-800 rounded-md shadow-md hover:shadow-lg max-h-[80%]">
        <h2 className="text-3xl text-black font-semibold mb-6">Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <UserCardLoader key={index} />
              ))
            : users.map((user) => <UserCard key={user._id} user={user} />)}
        </div>
      </div>
    </div>
  );
}

export default UserList;

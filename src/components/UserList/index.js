"use client";

import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import IndividualUserCard from "./IndividualUserCard";
const UserCardLoader = dynamic(() => import("./UserCardLoader"), {
  ssr: false,
});

function UserList({ users }) {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Filter users based on the search term
  const filteredUsers = users.filter(
    (user) =>
      user.username && // Ensure username exists
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white-900 min-h-screen h-screen flex items-center justify-center inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-12 py-6 bg-white-800 rounded-md shadow-md hover:shadow-lg max-h-[80%]">
        <h2 className="text-3xl text-black font-semibold mb-6">Users</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-300 rounded-md"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <UserCardLoader key={index} />
              ))
            : filteredUsers.map((user) => (
                <IndividualUserCard key={user._id} user={user} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;

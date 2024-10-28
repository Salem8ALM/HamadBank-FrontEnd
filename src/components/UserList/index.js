import UserCard from "./UserCard";

import React from "react";

import Link from "next/link";

function UserList({ users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div key={user._id}>
          <div className="bg-white-700 p-4 border rounded-md  text-center text-white shadow-md hover:shadow-lg">
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
              key={user._id}
              href={`/profile/${user._id}`}
              className="ml-2 px-2 py-1 text-black rounded-md hover:bg-green-600 transition-colors"
            >
              Transfer
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;

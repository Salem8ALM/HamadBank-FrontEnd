import UserCard from "./UserCard";

import React from "react";

import Link from "next/link";

function UserList({ users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <Link key={user._id} href={`/profile/${user._id}`} passHref>
          <div className="bg-white-700 p-4 border rounded-md cursor-pointer text-center text-white shadow-md hover:shadow-lg">
            <img
              src={
                user.image
                  ? `https://react-bank-project.eapi.joincoded.com/${user.image}`
                  : "—Pngtree—user profile avatar_13369988.png"
              }
              alt={user.username}
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />

            <h3 className="text-lg font-semibold text-black">
              {user.username}
            </h3>
            <h3 className="text-lg font-semibold text-black">
              <span>Balance: </span>
              {user.balance}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UserList;

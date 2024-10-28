function UserCard({ user }) {
  return (
    <div className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center">
      <img
        src={
          user.image
            ? `https://react-bank-project.eapi.joincoded.com/${user.image}`
            : "—Pngtree—user profile avatar_13369988.png"
        }
        alt={user.name || "User profile picture"}
        width={100}
        height={100}
        className="w-24 h-24 rounded-full mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg text-white font-semibold mb-2">
          {user.username}
        </h3>
      </div>
    </div>
  );
}

export default UserCard;

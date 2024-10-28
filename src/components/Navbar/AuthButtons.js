import { getUser } from "@/lib/token";
import NavLink from "./NavLink";
import { logout } from "@/api/actions/auth";

async function AuthButtons() {
  // TODO: Check if there's a user!

  const user = await getUser();

  if (user)
    return (
      <button
        type="button"
        // TODO: Make the logout button work!
        onClick={logout}
        className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    );

  return (
    <>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </>
  );
}

export default AuthButtons;

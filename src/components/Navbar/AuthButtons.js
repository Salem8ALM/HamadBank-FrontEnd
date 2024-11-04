import { getUser } from "@/lib/token";
import NavLink from "./NavLink";
import { logout } from "@/api/actions/auth";

function AuthButtons({ user }) {
  if (user)
    return (
      <button
        type="button"
        // TODO: Make the logout button work!
        onClick={logout}
        className="ml-2 px-2 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-md hover:scale-105 hover:shadow-[0_8px_16px_0_rgba(207,214,112,0.16)] duration-200"
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

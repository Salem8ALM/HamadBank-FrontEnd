import Link from "next/link";
import AuthButtons from "./AuthButtons";
import NavLink from "./NavLink";
import { getUser } from "@/lib/token";
import Image from "next/image";

async function Navbar() {
  const user = await getUser();
  return (
    <nav className="bg-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16   ">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="">
                <Image
                  src={"/BankOfFailaka.png"}
                  alt="bank logo"
                  width={300}
                  height={100}
                />
              </div>
            </Link>
          </div>

          {/* Center section: Navigation links */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-baseline space-x-7 text-red-700">
              <NavLink href="/">Home</NavLink>
              {user && <NavLink href="/transactions">Transactions</NavLink>}
              {user && <NavLink href="/profile">Profile</NavLink>}
              {user && <NavLink href="/users">Users</NavLink>}
            </div>
          </div>

          {/* Right section: Authentication buttons */}
          <div className="flex items-center">
            <AuthButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

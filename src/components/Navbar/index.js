import Link from "next/link";
import AuthButtons from "./AuthButtons";
import NavLink from "./NavLink";
import { getUser } from "@/lib/token";

async function Navbar() {
  const user = await getUser();
  return (
    <nav className="bg-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16   ">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="absolute -translate-x-5 -translate-y-2">
                <svg
                  width="41"
                  height="21"
                  viewBox="0 0 41 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9909 1.17494C31.2508 1.19 31.3519 0.828529 31.1064 0.768283C29.0846 0.271256 27.0629 0.0302734 25.0411 0.0302734C14.8023 0.0302734 5.1411 6.31089 0.332182 16.4322C-0.129937 17.4112 0.101122 18.4203 1.12645 18.8119L6.65743 20.8903C7.5239 21.2217 8.49146 20.7849 8.80917 19.9264C13.4304 7.80197 21.4452 0.858652 30.9909 1.17494Z"
                    fill="#D22630"
                  />
                  <path
                    d="M39.9589 9.29293C37.475 4.86487 33.547 2.54541 29.1858 2.54541C28.7381 2.54541 28.2904 2.57553 27.8283 2.62072C27.7706 2.63578 27.7128 2.69602 27.6839 2.75627C27.6695 2.80145 27.655 2.84664 27.655 2.90688C27.655 3.02738 27.7272 3.13281 27.8139 3.17799L27.9005 3.19305C29.8501 3.7202 31.2076 5.04561 32.5073 7.5458C32.565 7.65123 32.7528 8.04283 33.3304 8.17838L39.4968 10.0611C39.5401 10.0761 39.569 10.0761 39.6123 10.0761C39.8578 10.0761 40.0456 9.8502 40.0456 9.56403C40.0456 9.47366 40.0167 9.3833 39.9589 9.29293Z"
                    fill="#D22630"
                  />
                </svg>
              </div>
              <span className="font-semibold text-xl text-red-700 ml-1">
                Boubyan Bank
              </span>
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

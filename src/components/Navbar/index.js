import Link from "next/link";
import AuthButtons from "./AuthButtons";
import NavLink from "./NavLink";
import { getUser } from "@/lib/token";

async function Navbar() {
  const user = await getUser();
  return (
    <nav className="bg-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16   ">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="absolute -translate-x-1 -translate-y-2 -z-[1] opacity-50">
                {/* <svg
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
                </svg> */}
                {/* Diamond SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 200 200"
                  version="1.1"
                >
                  <path
                    fill="url(#SvgjsLinearGradient1692)"
                    d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="SvgjsLinearGradient1692"
                      gradientTransform="rotate(0 0.5 0.5)"
                    >
                      <stop
                        stopOpacity="1"
                        stopColor="rgba(235, 37, 37)"
                        offset="0"
                      ></stop>
                      <stop
                        stopOpacity="1"
                        stopColor="rgba(255, 203, 203)"
                        offset="0.5095"
                      ></stop>
                      <stop
                        stopOpacity="1"
                        stopColor="rgba(219, 17, 17)"
                        offset="1"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Lines SVG */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 64 64"
                  version="1.1"
                >
                  <path
                    id="SvgjsPath1700"
                    d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z"
                    data-name="Layer 9"
                    fill="url(#SvgjsLinearGradient1701)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="SvgjsLinearGradient1701"
                      gradientTransform="rotate(0 0.5 0.5)"
                    >
                      <stop
                        stopOpacity="1"
                        stopColor="rgba(235, 37, 37)"
                        offset="0"
                      ></stop>
                      <stop
                        stopOpacity="1"
                        stopColor="rgba(255, 203, 203)"
                        offset="0.5095"
                      ></stop>
                      <stop
                        stopOpacity="1"
                        stopColor="rgba(219, 17, 17)"
                        offset="1"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg> */}
              </div>
              <span className="font-semibold text-xl text-red-950 ml-1">
                AB Bank
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

"use client";

import { useState } from "react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import NavLink from "./NavLink";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger and close icons

function NavbarClientWrapper({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section: Logo */}
          <div className="flex justify-start items-center">
            <Link href="/">
              <div>
                <Image
                  src={"/BankOfFailaka.png"}
                  alt="bank logo"
                  width={150}
                  height={50}
                />
              </div>
            </Link>
          </div>

          {/* Center section: Toggle for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>

          {/* Right section: Desktop links */}
          <div className="hidden md:flex items-center space-x-7 text-red-700">
            <NavLink href="/">{user ? "Dashboard" : "Home"}</NavLink>
            {user && <NavLink href="/transactions">Transactions</NavLink>}
            {user && <NavLink href="/profile">Profile</NavLink>}
            {user && <NavLink href="/users">Users</NavLink>}
          </div>

          {/* Authentication buttons for Desktop */}
          <div className="hidden md:flex items-center justify-end">
            <AuthButtons user={user} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4 text-red-700">
            <NavLink href="/" onClick={toggleMenu}>
              {user ? "Dashboard" : "Home"}
            </NavLink>
            {user && (
              <NavLink href="/transactions" onClick={toggleMenu}>
                Transactions
              </NavLink>
            )}
            {user && (
              <NavLink href="/profile" onClick={toggleMenu}>
                Profile
              </NavLink>
            )}
            {user && (
              <NavLink href="/users" onClick={toggleMenu}>
                Users
              </NavLink>
            )}
            <AuthButtons />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarClientWrapper;

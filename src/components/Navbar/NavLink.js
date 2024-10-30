"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${
        isActive
          ? " px-3 py-2 rounded-md text-sm font-medium underline transition"
          : "hover:bg-gray-100 hover:text-red-950 px-3 py-2 rounded-md text-sm font-medium transition"
      } `}
    >
      {children}
    </Link>
  );
}

export default NavLink;

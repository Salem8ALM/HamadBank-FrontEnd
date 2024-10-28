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
          ? "bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium underline"
          : "hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      } `}
    >
      {children}
    </Link>
  );
}

export default NavLink;

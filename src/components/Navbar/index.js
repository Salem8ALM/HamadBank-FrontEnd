import React from "react";
import NavbarClientWrapper from "./NavbarClientWrapper";
import { getUser } from "@/lib/token";

async function Navbar() {
  const user = await getUser();
  return <NavbarClientWrapper user={user} />;
}

export default Navbar;

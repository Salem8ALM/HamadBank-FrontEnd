import { NextResponse } from "next/server";
import { getUser } from "./lib/token";

const homePage = "/";
const privateRoutes = ["/transactions", "/profile", "/users"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  // First condition is checking if the path is inside privateRoutes
  // Second condition is checking whether the path is going to a user profile
  const isPrivateRoute =
    privateRoutes.includes(path) ||
    path.includes("/profile") ||
    // Check if going to a deposit link
    path.includes("/transactions/transfer");
  // const isUserProfile = path.includes("/profile");
  const isHomePage = path === homePage; //Returns True if path is homepage (used to prevent continous redirecting to homepage)
  const user = await getUser();
  // Redirect to `/register` if page is private!
  if (isPrivateRoute && !user) {
    return NextResponse.redirect(new URL("/register", req.nextUrl));
  }
  //If page URL does neither exist (both public and privately), nor is Home page, redirect to home page
  if (!isPublicRoute && !isPrivateRoute && !isHomePage) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  // Return to home page if a logged in user tries to enter the login or register pages
  if (isPublicRoute && user) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  //while user is logged in, continue proceeding to the URL page
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img/|favicon.ico).*)"],
};

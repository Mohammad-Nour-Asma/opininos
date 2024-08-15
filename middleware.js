import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token"); // Assuming you're using cookies to store tokens

  // If trying to access the login page and already logged in, redirect to dashboard
  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If trying to access the dashboard and not logged in, redirect to login
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Allow the request to proceed if none of the above conditions are met
  return NextResponse.next();
}

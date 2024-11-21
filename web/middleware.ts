import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface AuthenticatedRequest extends NextRequest {
  auth?: boolean;
}

const unprotectedRoutes = ["/login", "/"];

export default async function middleware(req: AuthenticatedRequest) {

  const isAuthenticated = false;
  req.auth = isAuthenticated;

  if (unprotectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!req.auth) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)"
  ],
};
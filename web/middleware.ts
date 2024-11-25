import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { urls } from "./lib/config";

const unprotectedRoutes = [
  urls.homePage,
  urls.loginPage,
  urls.termsOfServicePage,
  urls.supportPage,
  urls.releaseNotesPage,
];
const unprotectedRoutePatterns = [
  /^\/support\/.*/,
  /^\/releases\/.*/,
];

export default auth((req: any) => {
  const isExactUnprotected = unprotectedRoutes.includes(req.nextUrl.pathname);

  const matchesPattern = unprotectedRoutePatterns.some((pattern) =>
    pattern.test(req.nextUrl.pathname)
  );

  if (isExactUnprotected || matchesPattern) {
    return NextResponse.next();
  }

  if (!req.auth) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
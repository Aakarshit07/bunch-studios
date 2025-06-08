import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/thank-you") {
    const formSubmitted = req.cookies.get("formSubmitted")?.value;

    if (formSubmitted !== "true") {
      // ⛔ Block direct access — redirect to home
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    // ✅ Allow access to /thank-you
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/thank-you"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { context } from "./lib/context";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes("/cart")) {
    const { isLogin } = context();
    if (!isLogin) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

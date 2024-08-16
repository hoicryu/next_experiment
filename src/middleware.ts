import { NextRequest, NextResponse } from "next/server";

export default function Middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/items/200")) {
    return NextResponse.redirect(new URL("/items", request.url));
  }
}

export const config = {
  matcher: ["/items/:path*"],
};

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (!req.auth) {
    const baseUrl = req.nextUrl.origin;
    const url = new URL("/signup", baseUrl);
    return Response.redirect(url);
  }
});

export const config = {
  matcher: ["/"],
};

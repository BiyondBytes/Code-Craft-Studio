import authConfig from "@/backend/auth/auth.config"
import NextAuth from "next-auth"
import { NextRequest, NextResponse } from "next/server";
const { auth } = NextAuth(authConfig);



export default async function middleware(request: NextRequest) {
  const isAuthenticated = await auth()
  const url = request.nextUrl

  if (
    url.pathname === '/' ||
    (url.pathname === '/home' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL('/home', request.url))
  }

}



export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
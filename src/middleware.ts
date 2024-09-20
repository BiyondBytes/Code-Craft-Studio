import authConfig from "@/backend/auth/auth.config"
import NextAuth from "next-auth"
import { NextRequest, NextResponse } from "next/server";
const { auth } = NextAuth(authConfig);



export default async function middleware(request: NextRequest) {
  const isAuthenticated = await auth()
  const url = request.nextUrl
  const searchParams = url.searchParams.toString()
  let hostname = request.headers
  const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''
    }`

  //if subdomain exists
  // const customSubDomain = hostname
  //   .get('host')
  //   ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
  //   .filter(Boolean)[0]

  //   console.log(customSubDomain,"cmdomain")
  //   console.log(pathWithSearchParams,customSubDomain,"cmdomain")

  // if (customSubDomain) {
  //   return NextResponse.rewrite(
  //     new URL(`/${customSubDomain}${pathWithSearchParams}`, request.url)
  //   )
  // }

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
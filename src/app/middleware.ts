// middleware.ts (place this in your root directory, same level as package.json)
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip middleware for login page and static assets
  if (pathname === '/login') {
    return NextResponse.next()
  }

  // Check for authentication token in cookies (we'll set this on login)
  const authToken = req.cookies.get('auth-token')?.value

  // If no auth token and not on login page, redirect to login
  if (!authToken) {
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (login page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
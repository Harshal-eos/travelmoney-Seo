import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the path already has a language prefix
  const hasLangPrefix = /^\/[a-z]{2}(\/|$)/.test(pathname)
  
  // If no language prefix, redirect to default language (English)
  if (!hasLangPrefix && pathname !== '/') {
    const url = request.nextUrl.clone()
    url.pathname = `/en${pathname}`
    return NextResponse.redirect(url)
  }
  
  // If root path, redirect to default language
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/en'
    return NextResponse.redirect(url)
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
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}

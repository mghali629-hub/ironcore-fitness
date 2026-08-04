import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/member-portal')) {
    const token = request.cookies.get('next-auth.session-token') || request.cookies.get('ironcore-token');
    if (!token) {
      const loginUrl = new URL('/membership', request.url);
      loginUrl.searchParams.set('callbackUrl', encodeURIComponent(pathname));
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/member-portal/:path*'],
};

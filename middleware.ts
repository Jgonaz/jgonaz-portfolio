import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n-config'

export function middleware (request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      //'/manifest.json',
      '/favicon.ico'
      // Your other files in `public`
    ].includes(pathname)
  )
    return

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${i18n.defaultLocale}${
          pathname.startsWith('/') ? '' : '/'
        }${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

import { NextResponse } from 'next/server';

const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ'];
const defaultLanguage = 'en';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already includes a language
  const pathnameHasLanguage = availableLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  // If pathname already has a language, continue
  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // Handle root path redirect
  if (pathname === '/') {
    // Try to get language from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || '';
    let detectedLanguage = defaultLanguage;
    
    // Simple language detection from Accept-Language header
    for (const lang of availableLanguages) {
      if (acceptLanguage.includes(lang)) {
        detectedLanguage = lang;
        break;
      }
    }
    
    return NextResponse.redirect(new URL(`/${detectedLanguage}`, request.url));
  }

  // Handle other paths that don't have language prefix
  // Check if it's one of our known routes
  const knownRoutes = ['/about', '/contact', '/projects', '/certifications'];
  const isKnownRoute = knownRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isKnownRoute) {
    // Try to get language from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || '';
    let detectedLanguage = defaultLanguage;
    
    // Simple language detection from Accept-Language header
    for (const lang of availableLanguages) {
      if (acceptLanguage.includes(lang)) {
        detectedLanguage = lang;
        break;
      }
    }
    
    return NextResponse.redirect(new URL(`/${detectedLanguage}${pathname}`, request.url));
  }

  // For all other paths, continue without redirect
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     * - projects (project images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|projects).*)',
  ],
};
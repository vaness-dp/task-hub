import { type NextRequest } from 'next/server'

import { updateSession } from './libs/supabase/middleware'

export async function middleware(request: NextRequest) {
	console.log(`[Middleware] ${request.method} ${request.nextUrl.pathname}`)

	return await updateSession(request)
}

export const config = {
	matcher: [
		/*
		 * We process all routes except:
		 * - _next/static (static files)
		 * - _next/image (image optimization)
		 * - favicon.ico (favicon)
		 * - image files
		 * - API routes (optional)
		 */
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
	]
}

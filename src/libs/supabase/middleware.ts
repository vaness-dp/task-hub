import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

import { Pages } from '@/config/pages.config'

const PUBLIC_ROUTES = [Pages.LOGIN, Pages.REGISTER, Pages.AUTH] as const

const AUTH_ONLY_ROUTES = [Pages.LOGIN, Pages.REGISTER] as const

export async function updateSession(request: NextRequest) {
	let supabaseResponse = NextResponse.next({
		request
	})

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll()
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
					supabaseResponse = NextResponse.next({
						request
					})
					cookiesToSet.forEach(({ name, value, options }) =>
						supabaseResponse.cookies.set(name, value, options)
					)
				}
			}
		}
	)

	const {
		data: { user }
	} = await supabase.auth.getUser()

	const { pathname } = request.nextUrl

	// Checking if the route is public
	const isPublicRoute = PUBLIC_ROUTES.some(route => pathname.startsWith(route))

	// Check if the route is for authorization only
	const isAuthOnlyRoute = AUTH_ONLY_ROUTES.some(route => pathname.startsWith(route))

	// If the user goes to the root path "/"
	if (pathname === '/') {
		const url = request.nextUrl.clone()
		if (user) {
			// The authorized user is redirected to the dashboard
			url.pathname = Pages.DASHBOARD
		} else {
			// Unauthorized to login
			url.pathname = Pages.LOGIN
		}
		return NextResponse.redirect(url)
	}

	// If the user is authorized and tries to access the authorization pages
	if (user && isAuthOnlyRoute) {
		const url = request.nextUrl.clone()
		url.pathname = Pages.DASHBOARD
		return NextResponse.redirect(url)
	}

	// If the user is not authorized and tries to access protected pages
	if (!user && !isPublicRoute) {
		const url = request.nextUrl.clone()
		url.pathname = Pages.LOGIN
		url.searchParams.set('redirectTo', pathname)
		return NextResponse.redirect(url)
	}

	return supabaseResponse
}

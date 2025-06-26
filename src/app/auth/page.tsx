import type { Metadata } from 'next'

import { AuthInitial } from '@/app/auth/initial/AuthInitial'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
}

export default function AuthPage() {
	return <AuthInitial />
}

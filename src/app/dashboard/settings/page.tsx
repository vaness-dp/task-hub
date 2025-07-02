import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Settings } from './Settings'

export const metadata: Metadata = {
	title: 'Settings - Dashboard',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return <Settings />
}

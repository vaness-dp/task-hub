'use client'

import dynamic from 'next/dynamic'

import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/search-field/SearchField'

import { Notifications } from './Notifications'

const DynamicThemeToggle = dynamic(() => import('@/ui/ThemeToggle').then(mod => mod.ThemeToggle), {
	ssr: false
})

export function Header() {
	return (
		<header className="relative flex items-center justify-between mb-8 pb-6 border-b backdrop-blur-xl border-gray-200 dark:border-white/10">
			<Heading>Dashboard</Heading>

			<div className="flex items-center space-x-4">
				<SearchField
					onChange={() => {}}
					value=""
				/>
				<Notifications />
				<DynamicThemeToggle />
			</div>
		</header>
	)
}

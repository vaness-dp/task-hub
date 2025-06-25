'use client'

import { Bell } from 'lucide-react'
import dynamic from 'next/dynamic'

import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/search-field/SearchField'

const DynamicThemeToggle = dynamic(() => import('@/ui/ThemeToggle').then(mod => mod.ThemeToggle), {
	ssr: false
})

export function Header() {
	return (
		<header className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-200 dark:border-neutral-700">
			<Heading>Dashboard</Heading>

			<div className="flex items-center space-x-4">
				<SearchField
					onChange={() => {}}
					value=""
				/>

				{/* Уведомления */}
				<button className="w-10 h-10 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-sm">
					<Bell className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
				</button>

				<DynamicThemeToggle />
			</div>
		</header>
	)
}

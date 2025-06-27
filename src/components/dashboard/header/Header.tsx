'use client'

import { Bell } from 'lucide-react'
import dynamic from 'next/dynamic'

import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/search-field/SearchField'

const DynamicThemeToggle = dynamic(() => import('@/ui/ThemeToggle').then(mod => mod.ThemeToggle), {
	ssr: false
})

// TODO: вынести эффекты в отдельный компонент

export function Header() {
	return (
		<header className="flex items-center justify-between mb-8 pb-6 border-b backdrop-blur-xl border-gray-200 dark:border-white/10 relative">
			{/* Effect for border */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent" />

			<Heading>Dashboard</Heading>

			<div className="flex items-center space-x-4">
				<SearchField
					onChange={() => {}}
					value=""
				/>

				{/* Notifications */}
				<button className="relative w-10 h-10 backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-lg group overflow-hidden">
					{/* Effects */}
					<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent rounded-2xl" />
					<div className="absolute inset-[1px] border border-white/40 rounded-2xl pointer-events-none dark:border-transparent" />

					<Bell className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200 relative z-10" />
				</button>

				<DynamicThemeToggle />
			</div>
		</header>
	)
}

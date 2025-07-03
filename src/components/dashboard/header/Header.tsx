'use client'

import dynamic from 'next/dynamic'

import { Heading } from '@/components/ui/Heading'

import { SearchField } from '@/ui/search-field/SearchField'

import { Notifications } from './Notifications'

const DynamicThemeToggle = dynamic(
	() => import('@/components/ui/ThemeToggle').then(mod => ({ default: mod.ThemeToggle })),
	{
		ssr: false
	}
)

interface Props {
	isChatOpen: boolean
}

export function Header({ isChatOpen }: Props) {
	return (
		<header
			className="relative flex items-center justify-between mb-8 pb-6 border-b backdrop-blur-xl border-gray-200 dark:border-white/10"
			style={{
				transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
			}}
		>
			<Heading>Dashboard</Heading>

			<div
				className="flex items-center space-x-4"
				style={{
					marginRight: isChatOpen ? '0' : '4rem',
					transition: 'margin 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
				}}
			>
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

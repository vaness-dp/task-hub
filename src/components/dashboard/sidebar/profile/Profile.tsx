'use client'

import { User } from 'lucide-react'
import Link from 'next/link'

import { Pages } from '@/config/pages.config'

interface Props {
	user?: {
		name: string
		email: string
		avatar?: string
		role?: string
	}
}

// TODO: вынести декор и эффекты в отдельный компонент

export function Profile({ user }: Props) {
	const MOCK_USER_DATA = user || {
		name: 'Awe Std',
		email: 'awestd@gmail.com',
		role: 'Project Manager',
		avatar: '👨‍💼'
	}

	return (
		<Link href={Pages.SETTINGS}>
			<div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 dark:bg-white/3 border border-white/15 dark:border-white/8 hover:bg-white/10 dark:hover:bg-white/6 transition-[background-color,box-shadow] duration-300 ease-out cursor-pointer group shadow-sm hover:shadow-lg">
				{/* Effects */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3 dark:from-white/3 dark:to-transparent rounded-2xl" />
				{/* Border */}
				<div className="absolute inset-[1px] border border-white/20 rounded-2xl pointer-events-none dark:border-transparent" />

				{/* Decorative elements */}
				<div className="absolute top-2 right-2 w-3 h-3 bg-white/15 dark:bg-white/10 rounded-full group-hover:scale-125 group-hover:bg-white/25 dark:group-hover:bg-white/20 transition-all duration-300" />
				<div className="absolute bottom-2 left-2 w-2 h-2 bg-white/12 dark:bg-white/8 rounded-full group-hover:scale-150 transition-transform duration-400" />

				<div className="flex items-center space-x-3 p-3 relative z-10">
					{/* Avatar */}
					<div className="relative">
						<div className="avatar">
							{MOCK_USER_DATA.avatar ? (
								<span className="text-lg">{MOCK_USER_DATA.avatar}</span>
							) : (
								<User className="w-5 h-5 text-primary" />
							)}
						</div>
						{/* Online indicator */}
						<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white/30 dark:border-black/20 backdrop-blur-sm overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-full" />
						</div>
					</div>

					{/* Info */}
					<div className="flex-1 min-w-0">
						<p className="font-medium text-sm text-gray-900 dark:text-white truncate">
							{MOCK_USER_DATA.name}
						</p>
						<p className="text-xs text-gray-600 dark:text-gray-400 truncate transition-colors duration-300 ease-out group-hover:text-gray-800 dark:group-hover:text-gray-200">
							{MOCK_USER_DATA.email}
						</p>
						{MOCK_USER_DATA.role && (
							<p className="text-xs text-primary font-medium">{MOCK_USER_DATA.role}</p>
						)}
					</div>
				</div>
			</div>
		</Link>
	)
}

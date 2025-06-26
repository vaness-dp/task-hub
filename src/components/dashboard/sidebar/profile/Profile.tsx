'use client'

import { User } from 'lucide-react'
import Link from 'next/link'

import { Pages } from '@/config/pages.config'

interface ProfileCardProps {
	user?: {
		name: string
		email: string
		avatar?: string
		role?: string
	}
}

export function Profile({ user }: ProfileCardProps) {
	const userData = user || {
		name: 'Awe Std',
		email: 'awestd@gmail.com',
		role: 'Project Manager',
		avatar: '👨‍💼'
	}

	return (
		<Link href={Pages.SETTINGS}>
			<div className="flex items-center space-x-3 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200 cursor-pointer group">
				{/* Аватар без анимации */}
				<div className="relative">
					<div className="avatar">
						{userData.avatar ? (
							<span className="text-lg">{userData.avatar}</span>
						) : (
							<User className="w-5 h-5 text-primary" />
						)}
					</div>
					{/* Онлайн индикатор */}
					<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-neutral-800"></div>
				</div>

				{/* Информация */}
				<div className="flex-1 min-w-0">
					<p className="font-medium text-sm text-primary-content truncate">{userData.name}</p>
					<p className="text-xs text-secondary-content truncate group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
						{userData.email}
					</p>
					{userData.role && <p className="text-xs text-primary font-medium">{userData.role}</p>}
				</div>
			</div>
		</Link>
	)
}

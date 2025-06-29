'use client'

import { User } from 'lucide-react'
import Link from 'next/link'

import { Decorative } from '@/ui/glass/Decorative'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import { Pages } from '@/config/pages.config'

import { OnlineIndicator } from './OnlineIndicator'

interface Props {
	user?: {
		name: string
		email: string
		avatar?: string
		role?: string
	}
}

const MOCK_USER_DATA = {
	name: 'Awe Std',
	email: 'awestd@gmail.com',
	role: 'Project Manager',
	avatar: '👨‍💼'
}

// TODO: вынести декор и эффекты в отдельный компонент

export function Profile({ user }: Props) {
	const USER = user || MOCK_USER_DATA

	return (
		<Link href={Pages.SETTINGS}>
			<div className="profile-container group">
				<InnerGlow className="rounded-2xl" />

				<Decorative
					size="medium"
					position="top-right"
				/>
				<Decorative
					size="small"
					position="bottom-left"
				/>

				<div className="flex items-center space-x-3 p-3 relative z-10">
					{/* Avatar */}
					<div className="relative">
						<div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
							{USER.avatar ? (
								<span className="text-lg">{USER.avatar}</span>
							) : (
								<User className="w-5 h-5 text-primary" />
							)}
						</div>
						<OnlineIndicator />
					</div>

					{/* Info */}
					<div className="flex-1 min-w-0">
						<p className="font-medium text-sm text-gray-900 dark:text-white truncate">
							{USER.name}
						</p>
						<p className="text-xs text-gray-600 dark:text-gray-400 truncate transition-colors duration-300 ease-out group-hover:text-gray-800 dark:group-hover:text-gray-200">
							{USER.email}
						</p>
						{USER.role && <p className="text-xs text-primary font-medium">{USER.role}</p>}
					</div>
				</div>
			</div>
		</Link>
	)
}

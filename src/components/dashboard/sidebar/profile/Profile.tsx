'use client'

import * as m from 'framer-motion/m'
import Link from 'next/link'

import { InnerGlow } from '@/ui/glass/InnerGlow'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

import { Pages } from '@/config/pages.config'

import { useUser } from '@/hooks/auth/useUser'

import { LogoutButton } from './LogoutButton'
import { ProfileAvatar } from './ProfileAvatar'

export function Profile() {
	const { data: user, isLoading } = useUser()

	if (isLoading) return <div>Loading...</div>
	if (!user) return null

	return (
		<m.div
			initial="initial"
			whileHover="hover"
			variants={cardAnimations.basic}
			className="profile-container relative group"
		>
			<InnerGlow className="rounded-2xl" />
			<Link href={Pages.SETTINGS}>
				<div className="relative flex items-center space-x-3 p-3 z-10">
					<ProfileAvatar user={user} />

					<div className="flex-1 min-w-0">
						<p className="font-medium text-sm text-gray-900 dark:text-white truncate">
							{user.name}
						</p>
						<p className="text-xs text-gray-600 dark:text-gray-400 truncate transition-colors duration-300 ease-out group-hover:text-gray-800 dark:group-hover:text-gray-200">
							{user.email}
						</p>
						{user.role && <p className="text-xs text-primary font-medium">{user.role}</p>}
					</div>
				</div>
			</Link>

			<LogoutButton />
		</m.div>
	)
}

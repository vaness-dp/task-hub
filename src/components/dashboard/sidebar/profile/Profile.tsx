'use client'

import Link from 'next/link'

import { InnerGlow } from '@/ui/glass/InnerGlow'

import { Pages } from '@/config/pages.config'

import { ProfileAvatar } from './ProfileAvatar'
import { MOCK_USER_DATA } from './profile.data'

export function Profile() {
	const USER = MOCK_USER_DATA

	return (
		<Link href={Pages.SETTINGS}>
			<div className="profile-container group">
				<InnerGlow className="rounded-2xl" />

				<div className="flex items-center space-x-3 p-3 relative z-10">
					<ProfileAvatar user={USER} />

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

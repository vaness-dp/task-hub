import * as m from 'framer-motion/m'
import { User } from 'lucide-react'

import { OnlineIndicator } from '@/ui/OnlineIndicator'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

import type { IUser } from '@/types/profile.types'

interface Props {
	user: IUser
}

export function ProfileAvatar({ user }: Props) {
	return (
		<div className="relative">
			<m.div
				variants={cardAnimations.intense}
				className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center"
			>
				{user.avatar ? (
					<span className="text-lg">{user.avatar}</span>
				) : (
					<User className="w-5 h-5 text-primary" />
				)}
			</m.div>
			<OnlineIndicator />
		</div>
	)
}

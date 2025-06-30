import { User } from 'lucide-react'

import { OnlineIndicator } from '../../../ui/OnlineIndicator'

import type { IUser } from './profile.types'

interface Props {
	user: IUser
}

export function ProfileAvatar({ user }: Props) {
	return (
		<div className="relative">
			<div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
				{user ? (
					<span className="text-lg">{user.avatar}</span>
				) : (
					<User className="w-5 h-5 text-primary" />
				)}
			</div>
			<OnlineIndicator />
		</div>
	)
}

import cn from 'clsx'
import { Users } from 'lucide-react'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import type { ITaskWithTeam } from '@/types/task.types'

import { AvatarCounter } from './AvatarCounter'
import { avatarClass, containerClass } from './team-avatars.styles'

interface Props {
	task?: ITaskWithTeam
	teamMembers?: string[]
	maxVisible?: number
	showCounter?: boolean
	variant?: 'default' | 'task-block'
}

export function TeamAvatars({
	task,
	teamMembers,
	maxVisible = 3,
	showCounter = false,
	variant = 'default'
}: Props) {
	const members = task?.team || teamMembers || []
	const remainingCount = members.length - maxVisible

	return (
		<div className={containerClass({ variant })}>
			{members.slice(0, maxVisible).map((member, index) => (
				<div
					key={index}
					className={avatarClass({ variant })}
				>
					<GradientOverlay
						variant="quinary"
						className="rounded-full"
					/>
					<span className={cn('relative z-10', variant === 'task-block' && 'drop-shadow-sm')}>
						{member}
					</span>
				</div>
			))}

			{showCounter &&
				remainingCount > 0 &&
				(variant === 'task-block' ? (
					<div className="w-8 h-8 backdrop-blur-sm bg-white/50 dark:bg-white/40 rounded-full border border-white/60 dark:border-white/50 flex items-center justify-center text-sm flex-shrink-0 relative overflow-hidden">
						<GradientOverlay
							variant="quinary"
							className="rounded-full"
						/>
						<Users className="w-4 h-4 text-white relative z-10 drop-shadow-sm" />
					</div>
				) : (
					<AvatarCounter count={remainingCount} />
				))}
		</div>
	)
}

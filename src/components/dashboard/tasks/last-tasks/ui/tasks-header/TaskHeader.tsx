import * as m from 'framer-motion/m'
import { Plane } from 'lucide-react'

import { TeamAvatars } from '@/ui/team-avatars/TeamAvatars'

import { lastTasksCardAnimations } from '@/constants/animations/dashboard/last-tasks-card.animations'
import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

import type { ITask } from '@/types/task.types'

interface Props {
	task: ITask
}

export function TaskHeader({ task }: Props) {
	return (
		<div className="flex items-start justify-between mb-3">
			<div className="flex items-start space-x-3 flex-1 min-w-0">
				<m.div
					variants={lastTasksCardAnimations.intense}
					className="last-tasks-header"
				>
					<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl" />
					{task.icon === '✈️' ? (
						<Plane className="w-6 h-6 text-primary relative z-10" />
					) : (
						<span className="text-2xl relative z-10">{task.icon}</span>
					)}
				</m.div>
				<div className="flex-1 min-w-0">
					<m.h3
						variants={cardAnimations.subtle}
						className="font-semibold text-gray-900 dark:text-white text-base leading-tight origin-left"
					>
						{task.title}
					</m.h3>
					<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{task.subtitle}</p>
				</div>
			</div>

			<TeamAvatars task={task} />
		</div>
	)
}

import * as m from 'framer-motion/m'
import { twMerge } from 'tailwind-merge'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { TeamAvatars } from '@/ui/team-avatars/TeamAvatars'

import { projectStatCard } from '@/constants/animations/dashboard/project-stat-card.animations'

import type { ITodayTask } from '@/types/task.types'

import { TodayTaskHeader } from './TodayTaskHeader'

interface Props {
	task: ITodayTask
	index: number
}

export function TodayTaskCard({ task }: Props) {
	return (
		<m.div
			initial="initial"
			whileHover="hover"
			variants={projectStatCard.card}
			className={twMerge('today-task-card', task.color)}
			role="button"
			tabIndex={0}
			aria-label={`Task: ${task.title}`}
		>
			<GradientOverlay
				variant="quaternary"
				className="rounded-3xl"
			/>

			<div className="relative z-10 p-6">
				<TodayTaskHeader
					icon={task.icon}
					title={task.title}
					timeRange={task.timeRange}
				/>

				<TeamAvatars
					task={task}
					showCounter
					variant="task-block"
				/>
			</div>
		</m.div>
	)
}

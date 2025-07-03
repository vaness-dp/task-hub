'use client'

import * as m from 'framer-motion/m'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import { lastTasksCardAnimations } from '@/constants/animations/dashboard/last-tasks-card.animations'

import type { ITask } from '@/types/task.types'

import { TaskContent } from './TaskContent'
import { TaskStats } from './task-stats/TaskStats'
import { TaskActions } from './tasks-actions/TaskActions'
import { TaskHeader } from './tasks-header/TaskHeader'
import { TaskProgress } from './tasks-progress/TaskProgress'

interface Props {
	task: ITask
}

export function TaskCard({ task }: Props) {
	return (
		<m.div
			initial="initial"
			whileHover="hover"
			variants={lastTasksCardAnimations.basic}
			className="last-tasks-card"
		>
			<GradientOverlay />
			<InnerGlow />

			<div className="relative z-10 p-6 flex flex-col h-full">
				{/* Task header with icon, title and team */}
				<div className="h-[120px] flex flex-col">
					<TaskHeader task={task} />
					<TaskContent task={task} />
				</div>

				{/* Progress section */}
				<div className="h-[50px] flex items-center">
					<TaskProgress task={task} />
				</div>

				<div className="flex-1" />

				{/* Footer with stats and actions */}
				<div className="h-[50px] flex items-center justify-between">
					<TaskStats task={task} />
					<TaskActions />
				</div>
			</div>
		</m.div>
	)
}

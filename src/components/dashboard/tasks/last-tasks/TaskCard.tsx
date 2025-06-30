'use client'

import * as m from 'framer-motion/m'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import { taskCard } from '@/constants/animations/dashboard/task-card.animations'

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
			variants={taskCard.card}
			className="last-tasks-card"
		>
			<GradientOverlay />
			<InnerGlow />

			<div className="relative z-10 p-6 flex flex-col h-full">
				<div className="h-[120px] flex flex-col">
					<TaskHeader task={task} />
					<TaskContent task={task} />
				</div>

				<div className="h-[50px] flex items-center">
					<TaskProgress task={task} />
				</div>

				<div className="flex-1" />

				<div className="h-[50px] flex items-center justify-between">
					<TaskStats task={task} />
					<TaskActions />
				</div>
			</div>
		</m.div>
	)
}

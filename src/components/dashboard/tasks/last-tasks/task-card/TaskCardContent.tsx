import * as m from 'framer-motion/m'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import { lastTasksCardAnimations } from '@/constants/animations/dashboard/last-tasks-card.animations'

import type { ITask } from '@/types/task.types'

import { TaskProgress } from '../status/tasks-progress/TaskProgress'
import { TaskStats } from '../ui/task-stats/TaskStats'
import { TaskActions } from '../ui/tasks-actions/TaskActions'
import { TaskHeader } from '../ui/tasks-header/TaskHeader'

import { TaskContent } from './TaskContent'

interface Props {
	task: ITask
	onEditTask: () => void
	onDuplicateTask: () => void
	onDeleteTask: () => void
}

export function TaskCardContent({ task, onEditTask, onDuplicateTask, onDeleteTask }: Props) {
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
					<TaskActions
						onEditTask={onEditTask}
						onAddTask={onDuplicateTask}
						onDeleteTask={onDeleteTask}
					/>
				</div>
			</div>
		</m.div>
	)
}

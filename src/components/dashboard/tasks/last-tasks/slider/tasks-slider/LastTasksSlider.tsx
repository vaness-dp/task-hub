import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'

import { lastTasksCardAnimations } from '@/constants/animations/dashboard/last-tasks-card.animations'

import type { ITask } from '@/types/task.types'

import { TaskCard } from '../../task-card/TaskCard'
import { TaskCreateCard } from '../../task-card/TaskCreateCard'

interface Props {
	tasks: ITask[]
	currentIndex: number
	activeFilter?: string
	onCreateTask?: () => void
	onTaskDeleted?: (taskId: string) => void
	onTaskDuplicated?: (task: ITask) => void
	onTaskEdit?: (task: ITask) => void
}

export function LastTasksSlider({
	tasks,
	currentIndex,
	activeFilter = 'all',
	onCreateTask,
	onTaskDeleted,
	onTaskDuplicated,
	onTaskEdit
}: Props) {
	const itemsPerPage = 3
	const visibleTasks = tasks.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

	// show the create button if there is free space in the grid
	const hasSpaceForCreateButton = visibleTasks.length < itemsPerPage && onCreateTask

	return (
		<div>
			<AnimatePresence
				mode="wait"
				initial={false}
			>
				<m.div
					key={`${activeFilter}-${currentIndex}`}
					variants={lastTasksCardAnimations.basic}
					initial="initial"
					animate="animate"
					exit="exit"
					className="grid grid-cols-3 gap-6"
				>
					{visibleTasks.map((task, index) => (
						<m.div
							key={task.id}
							custom={index}
							variants={lastTasksCardAnimations.subtle}
							initial="initial"
							animate="animate"
							exit="exit"
							className="origin-center"
						>
							<TaskCard
								task={task}
								onTaskDeleted={onTaskDeleted}
								onTaskDuplicated={onTaskDuplicated}
								onTaskEdit={onTaskEdit}
							/>
						</m.div>
					))}

					{/* Create Task Card */}
					{hasSpaceForCreateButton && (
						<m.div
							key="create-task"
							custom={visibleTasks.length}
							variants={lastTasksCardAnimations.subtle}
							initial="initial"
							animate="animate"
							exit="exit"
							className="origin-center"
						>
							<TaskCreateCard onCreateTask={onCreateTask} />
						</m.div>
					)}
				</m.div>
			</AnimatePresence>
		</div>
	)
}

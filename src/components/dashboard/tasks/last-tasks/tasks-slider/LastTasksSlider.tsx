import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

import type { ITask } from '@/types/task.types'

import { TaskCard } from '../TaskCard'

interface Props {
	tasks: ITask[]
	currentIndex: number
	activeFilter?: string
}

export function LastTasksSlider({ tasks, currentIndex, activeFilter = 'all' }: Props) {
	const itemsPerPage = 3
	const visibleTasks = tasks.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

	return (
		<div>
			<AnimatePresence
				mode="wait"
				initial={false}
			>
				<m.div
					key={`${activeFilter}-${currentIndex}`}
					variants={cardAnimations.basic}
					initial="initial"
					animate="animate"
					exit="exit"
					className="grid grid-cols-3 gap-6"
				>
					{visibleTasks.map((task, index) => (
						<m.div
							key={task.id}
							custom={index}
							variants={cardAnimations.subtle}
							initial="initial"
							animate="animate"
							exit="exit"
							className="origin-center"
						>
							<TaskCard task={task} />
						</m.div>
					))}
				</m.div>
			</AnimatePresence>
		</div>
	)
}

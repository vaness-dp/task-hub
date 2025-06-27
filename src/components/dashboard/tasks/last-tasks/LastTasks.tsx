import type { ITask } from '@/types/task.types'

import { TaskCard } from './TaskCard'

interface Props {
	tasks: ITask[]
}

export function LastTasks({ tasks }: Props) {
	return (
		<div className="space-y-6">
			<div className="flex items-center space-x-2">
				<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Last Tasks</h2>
				<span className="text-lg text-gray-500 dark:text-gray-400">({tasks.length})</span>
			</div>

			<div className="grid grid-cols-3 gap-6">
				{tasks.slice(0, 3).map(task => (
					<TaskCard
						key={task.id}
						task={task}
					/>
				))}
			</div>
		</div>
	)
}

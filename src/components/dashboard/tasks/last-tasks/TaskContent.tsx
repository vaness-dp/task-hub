import type { ITask } from '@/types/task.types'

interface Props {
	task: ITask
}

export function TaskContent({ task }: Props) {
	return (
		<div className="mb-2">
			<p className="text-sm text-gray-600 dark:text-gray-400">
				Due: <span className="font-medium text-gray-800 dark:text-gray-200">{task.dueDate}</span>
			</p>
		</div>
	)
}

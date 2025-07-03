import { Plus } from 'lucide-react'

interface Props {
	tasksCount: number
	onCreateTask: () => void
}

/**
 * Header component for LastTasks section
 * Displays title with task count and create button
 */
export function LastTasksHeader({ tasksCount, onCreateTask }: Props) {
	return (
		<div className="flex items-center space-x-4">
			<div className="flex items-center space-x-2">
				<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Last Tasks</h2>
				<span className="text-lg text-gray-500 dark:text-gray-400">({tasksCount})</span>
			</div>

			{/* Create New Task Button */}
			<button
				onClick={onCreateTask}
				className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
			>
				<Plus className="w-4 h-4" />
				<span>New Task</span>
			</button>
		</div>
	)
}

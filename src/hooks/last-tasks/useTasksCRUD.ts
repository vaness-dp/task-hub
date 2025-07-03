import { useNotification } from '@/hooks/useNotification'

import type { ITask } from '@/types/task.types'

import { useTaskManager } from './useTaskManager'

interface Props {
	onTaskCreated?: (task: ITask) => void
	onTaskDeleted?: (taskId: string) => void
	onTaskAdded: (task: ITask) => void
	onTaskUpdated: (task: ITask) => void
	onTaskRemoved: (taskId: string) => ITask | undefined
	onNavigationScheduled: (taskId: string) => void
	onDeletedTaskSet: (task: ITask) => void
}

export function useTasksCRUD({
	onTaskCreated,
	onTaskDeleted,
	onTaskAdded,
	onTaskUpdated,
	onTaskRemoved,
	onNavigationScheduled,
	onDeletedTaskSet
}: Props) {
	const { notification, showDeleteNotification, hideNotification } = useNotification()

	const taskManager = useTaskManager({
		onTaskSaved: (task, mode) => {
			if (mode === 'create' || mode === 'duplicate') {
				onTaskAdded(task)
				onNavigationScheduled(task.id)
				onTaskCreated?.(task)
			}
			if (mode === 'edit') {
				onTaskUpdated(task)
			}
			console.log(`Task ${mode}d successfully:`, task)
		},
		onTaskDeleted: taskId => {
			const deletedTask = onTaskRemoved(taskId)
			if (deletedTask) {
				onDeletedTaskSet(deletedTask)
				showDeleteNotification(deletedTask.title)
			}
			onTaskDeleted?.(taskId)
		},
		onError: error => {
			console.error('Task operation failed:', error)
		}
	})

	return {
		taskManager,
		notification,
		hideNotification,
		showDeleteNotification
	}
}

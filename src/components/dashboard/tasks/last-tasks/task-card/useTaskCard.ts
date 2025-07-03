import { useTaskManager } from '@/hooks/last-tasks/useTaskManager'

import { duplicateTask } from '@/utils/task.utils'

import type { ITask } from '@/types/task.types'

interface IUseTaskCardOptions {
	task: ITask
	onTaskDeleted?: (taskId: string) => void
	onTaskDuplicated?: (task: ITask) => void
	onTaskEdit?: (task: ITask) => void
}

interface IUseTaskCardReturn {
	taskManager: ReturnType<typeof useTaskManager>
	handleEditTask: () => void
	handleDuplicateTask: () => void
	handleDeleteTask: () => void
}

export function useTaskCard({
	task,
	onTaskDeleted,
	onTaskDuplicated,
	onTaskEdit
}: IUseTaskCardOptions): IUseTaskCardReturn {
	const taskManager = useTaskManager({
		onTaskSaved: (updatedTask, mode) => {
			console.log(`Task ${mode}d successfully:`, updatedTask)
		},
		onTaskDeleted: taskId => {
			onTaskDeleted?.(taskId)
			console.log('Task deleted successfully:', taskId)
		},
		onError: error => {
			console.error('Task operation failed:', error)
		}
	})

	const handleEditTask = () => {
		if (onTaskEdit) {
			onTaskEdit(task)
		} else {
			taskManager.openEditModal(task)
		}
	}

	const handleDuplicateTask = () => {
		if (onTaskDuplicated) {
			const duplicatedTask = duplicateTask(task)
			onTaskDuplicated(duplicatedTask)
		} else {
			taskManager.openDuplicateModal(task)
		}
	}

	const handleDeleteTask = () => {
		taskManager.openDeleteModal(task)
	}

	return {
		taskManager,
		handleEditTask,
		handleDuplicateTask,
		handleDeleteTask
	}
}

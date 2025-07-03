import { useCallback } from 'react'

import { validateTask } from '@/utils/task.utils'

import type { ITask } from '@/types/task.types'

import type { TTaskModalMode } from './useTaskModalState'

interface IUseTaskOperationsOptions {
	onTaskSaved?: (task: ITask, mode: TTaskModalMode) => void
	onTaskDeleted?: (taskId: string) => void
	onError?: (error: string) => void
}

interface IUseTaskOperationsReturn {
	saveTask: (task: ITask, mode: TTaskModalMode) => Promise<void>
	confirmDelete: (taskToDelete: ITask | null, closeDeleteModal: () => void) => Promise<void>
	validateCurrentTask: (task: ITask) => { isValid: boolean; errors: string[] }
}

export function useTaskOperations({
	onTaskSaved,
	onTaskDeleted,
	onError
}: IUseTaskOperationsOptions = {}): IUseTaskOperationsReturn {
	const saveTask = useCallback(
		async (task: ITask, mode: TTaskModalMode) => {
			try {
				const validation = validateTask(task)

				if (!validation.isValid) {
					onError?.(validation.errors.join(', '))
					return
				}

				// Simulating an API request
				await new Promise(resolve => setTimeout(resolve, 1000))

				onTaskSaved?.(task, mode)

				console.log(`Task ${mode}d:`, task)
			} catch (error) {
				onError?.('Failed to save task')
				console.error('Error saving task:', error)
			}
		},
		[onTaskSaved, onError]
	)

	const confirmDelete = useCallback(
		async (taskToDelete: ITask | null, closeDeleteModal: () => void) => {
			if (!taskToDelete) return

			try {
				// Simulating an API request
				await new Promise(resolve => setTimeout(resolve, 500))

				onTaskDeleted?.(taskToDelete.id)
				closeDeleteModal()

				console.log('Task deleted:', taskToDelete.id)
			} catch (error) {
				onError?.('Failed to delete task')
				console.error('Error deleting task:', error)
			}
		},
		[onTaskDeleted, onError]
	)

	const validateCurrentTask = useCallback((task: ITask) => {
		return validateTask(task)
	}, [])

	return {
		saveTask,
		confirmDelete,
		validateCurrentTask
	}
}

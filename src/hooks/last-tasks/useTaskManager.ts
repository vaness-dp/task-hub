import { useCallback } from 'react'

import type { ITask } from '@/types/task.types'

import { type TTaskModalMode, useTaskModalState } from './useTaskModalState'
import { useTaskOperations } from './useTaskOperations'

interface IUseTaskManagerOptions {
	onTaskSaved?: (task: ITask, mode: TTaskModalMode) => void
	onTaskDeleted?: (taskId: string) => void
	onError?: (error: string) => void
}

interface IUseTaskManagerReturn {
	isModalOpen: boolean
	modalMode: TTaskModalMode
	currentTask: ITask | null
	isDeleteModalOpen: boolean
	taskToDelete: ITask | null
	openEditModal: (task: ITask) => void
	openCreateModal: () => void
	openDuplicateModal: (task: ITask) => void
	openDeleteModal: (task: ITask) => void
	closeModal: () => void
	closeDeleteModal: () => void
	saveTask: (task: ITask) => Promise<void>
	confirmDelete: () => Promise<void>
	validateCurrentTask: (task: ITask) => { isValid: boolean; errors: string[] }
}

export function useTaskManager(options: IUseTaskManagerOptions = {}): IUseTaskManagerReturn {
	const modalState = useTaskModalState()
	const operations = useTaskOperations(options)

	// Wrapper for saveTask to use modalMode from state
	const saveTask = useCallback(
		async (task: ITask) => {
			await operations.saveTask(task, modalState.modalMode)
		},
		[operations.saveTask, modalState.modalMode]
	)

	// Wrapper for confirmDelete to pass taskToDelete and closeDeleteModal
	const confirmDelete = useCallback(async () => {
		await operations.confirmDelete(modalState.taskToDelete, modalState.closeDeleteModal)
	}, [operations.confirmDelete, modalState.taskToDelete, modalState.closeDeleteModal])

	return {
		isModalOpen: modalState.isModalOpen,
		modalMode: modalState.modalMode,
		currentTask: modalState.currentTask,
		isDeleteModalOpen: modalState.isDeleteModalOpen,
		taskToDelete: modalState.taskToDelete,
		openEditModal: modalState.openEditModal,
		openCreateModal: modalState.openCreateModal,
		openDuplicateModal: modalState.openDuplicateModal,
		openDeleteModal: modalState.openDeleteModal,
		closeModal: modalState.closeModal,
		closeDeleteModal: modalState.closeDeleteModal,
		saveTask,
		confirmDelete,
		validateCurrentTask: operations.validateCurrentTask
	}
}

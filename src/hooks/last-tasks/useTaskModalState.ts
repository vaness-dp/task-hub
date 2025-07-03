import { useCallback, useState } from 'react'

import { createEmptyTask, duplicateTask } from '@/utils/task.utils'

import type { ITask } from '@/types/task.types'

export type TTaskModalMode = 'edit' | 'create' | 'duplicate'

interface IUseTaskModalStateReturn {
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
}

export function useTaskModalState(): IUseTaskModalStateReturn {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalMode, setModalMode] = useState<TTaskModalMode>('edit')
	const [currentTask, setCurrentTask] = useState<ITask | null>(null)

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
	const [taskToDelete, setTaskToDelete] = useState<ITask | null>(null)

	const openEditModal = useCallback((task: ITask) => {
		setCurrentTask(task)
		setModalMode('edit')
		setIsModalOpen(true)
	}, [])

	const openCreateModal = useCallback(() => {
		const newTask = createEmptyTask()
		setCurrentTask(newTask)
		setModalMode('create')
		setIsModalOpen(true)
	}, [])

	const openDuplicateModal = useCallback((task: ITask) => {
		const duplicatedTask = duplicateTask(task)
		setCurrentTask(duplicatedTask)
		setModalMode('duplicate')
		setIsModalOpen(true)
	}, [])

	const openDeleteModal = useCallback((task: ITask) => {
		setTaskToDelete(task)
		setIsDeleteModalOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsModalOpen(false)
		setCurrentTask(null)

		setTimeout(() => {
			setModalMode('edit')
		}, 300)
	}, [])

	const closeDeleteModal = useCallback(() => {
		setIsDeleteModalOpen(false)
		setTaskToDelete(null)
	}, [])

	return {
		isModalOpen,
		modalMode,
		currentTask,
		isDeleteModalOpen,
		taskToDelete,
		openEditModal,
		openCreateModal,
		openDuplicateModal,
		openDeleteModal,
		closeModal,
		closeDeleteModal
	}
}
